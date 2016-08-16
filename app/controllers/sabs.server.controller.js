var sabs = require('../../sabs.json');

module.exports = {
  index: function(req, res) {
    res.json(sabs);
  },

  error: function (req,res) {
    res.status(404).sendFile(__dirname + '/public/404.html');
  }
};
