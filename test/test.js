const chai = require('chai');

const Line = require('../index').connect({
  access_token: process.env.ACCESS_TOKEN,
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.CLIENT_SECRET,
});

chai.should();

describe('Line Messenger API Testing', () => {
  it('getAccessToken() method to get access token from Line Messenger', (done) => {
    Line
      .getAccessToken()
      .then((results) => {
        results.should.be.a('object');
        results.access_token.should.be.a('string');
        done();
      })
      .catch((error) => {
        done(error);
      });
  });
});
