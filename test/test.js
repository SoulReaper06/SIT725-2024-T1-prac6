var expect  = require('chai').expect;
var assert = require('assert');
var request = require('request');
const Adopter = require("../models/adopter");
const Pet = require('../models/pet');

var testAdopter = new Adopter({
  firstName: "Mike",
  lastName: "Tyson",
  mobileNumber: "987652524",
  email: "test@gmail.com",
  address: "asdwe qwdsd asdsdsd",
});

var testPet = new Pet({
  petName:"Goku",
  description:"Meet Goku the adventurous golden retriever with a heart of gold and a nose for fun! With his fluffy golden fur and soulful eyes . Max is always ready for the next big adventure.",
  imageUrl:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQvpbsrsVOOUX-Wz2T5g56SwtTd7TP-wB0JB47d2TDlfqCpNPGB"
})

describe("Test Database for Adopter", function () {
  var url = "http://localhost:3000/submitAdopter";
  it("Should save a new Adopter to test database", function (done) {
    request.post(
      { url: url, form: testAdopter },
      function (error, response, body) {
        console.log("Response body:", body);
        let parsedBody = JSON.parse(body);
        expect(response.statusCode).to.equal(200);
        expect(parsedBody.message).to.equal("Success");
        done();
      }
    );
  });
});

describe("Test Database for Pets", function () {
  var url = "http://localhost:3000/submitPet";
  it("Should save a new Pet to test database", function (done) {
    request.post(
      { url: url, form: testPet },
      function (error, response, body) {
        console.log("Response body:", body);
        let parsedBody = JSON.parse(body);
        expect(response.statusCode).to.equal(200);
        expect(parsedBody.message).to.equal("Success");
        done();
      }
    );
  });
});

describe('Retrieve Pets', function() {
  it('Should retrieve all pet from the database', function(done) {
    var url = "http://localhost:3000/api/pets";
    request.get(url, function(error, response, body) {
      if (error) {
        console.error('Request error:', error);
        done(error);
      } else {
        const adopters = JSON.parse(body);
        expect(response.statusCode).to.equal(200);
        expect(adopters).to.be.an('array');
        done();
      }
    });
  });
});

