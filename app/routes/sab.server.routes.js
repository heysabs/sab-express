module.exports = function(app) {

  var sabsController = require('../controllers/sabs.server.controller');


  // ACTUAL ROUTING

  app.route('/sabs')
  .get(sabsController.index);

 };
