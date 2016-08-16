var app = require('../app');
var request = require("request");
var supertest = require("supertest");

describe("Express Server", function() {
  describe("GET /sabs", function() {
    it("returns status code 200", function(done) {

      supertest(app)
        .get('/sabs')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });

    it("returns the correct data for /sab", function(done) {
      console.log("in /sabs");
      supertest(app)
        .get('/sabs')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, {
          "name": "Sabrina Ooi",
          "age": 25,
          "email": "heysabs@gmail.com",
          "image": "http://cdn.earthporm.com/wp-content/uploads/2014/07/cute-bunnies-tongues-6.jpg",
          "quote": "Hakuna Matata",
          "description": "I am the walrus. Koo koo kachoo."
        }, done);
    });

    it('returns status 404 when name is not found', function(done) {
     console.log("in 404 test");
     supertest(app)
       .get('/users/junius')
       .set('Accept', 'application/json')
       .expect('Content-Type', /json/)
       .expect(404);
       done();
   });
  });


});
