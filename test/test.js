const chai = require('chai');

const Line = require('../index').connect({
  access_token: process.env.ACCESS_TOKEN,
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.CLIENT_SECRET,
});

chai.should();

let accessToken;

describe('Line Messenger API Testing', () => {
  it('getAccessToken() method to get access token from Line Messenger', (done) => {
    Line
      .getAccessToken()
      .then((results) => {
        accessToken = results.access_token;
        results.should.be.a('object');
        results.access_token.should.be.a('string');
        done();
      })
      .catch((error) => {
        done(error);
      });
  });

  it('sendPushMessage() method to send broadcast messages to all friend', (done) => {
    Line
      .sendPushMessage(accessToken, (message) => {
        message.to(process.env.USER_ID);
        message.text('Hello brow');
      })
      .then((results) => {
        results.should.be.a('object');
        results.should.eql({});
        done();
      })
      .catch((error) => {
        done(error);
      });
  });

  it('revokeAccessToken() method to revoke access token from Line Messenger', (done) => {
    Line
      .revokeAccessToken(accessToken)
      .then((results) => {
        results.should.have.lengthOf(0);
        done();
      })
      .catch((error) => {
        done(error);
      });
  });
});
