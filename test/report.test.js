//During the test the env variable is set to test
process.env.NODE_ENV = 'test';


//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../bin/www');
let should = chai.should();
const API = 'http://localhost:5000'

chai.use(chaiHttp);
//Our parent block
describe('Reports', () => {

/*
  * Test the /GET route
  */
  describe('/GET all reports', () => {
      it('it should GET all report', (done) => {
        chai.request(API)
            .get('/report')
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.success.should.be.eql(true);
              done();
            });
      });
  });



});
