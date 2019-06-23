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

  it('sendPushMessage() method to send broadcast text message', (done) => {
    Line
      .sendPushMessage(accessToken, (message) => {
        message.to(process.env.USER_ID);
        message.text('Hello brow');
        message.notificationDisabled();
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

  it('sendPushMessage() method to send message with sticker', (done) => {
    Line
      .sendPushMessage(accessToken, (message) => {
        message.to(process.env.USER_ID);
        message.sticker('11537', '52002768');
        message.notificationDisabled();
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

  it('sendPushMessage() method to send message with image', (done) => {
    Line
      .sendPushMessage(accessToken, (message) => {
        message.to(process.env.USER_ID);
        message.image('https://d.line-scdn.net/stf/lp/character%20update_0516_Img_PNG/2_LINE_Store_PNG/09_id.png', 'https://d.line-scdn.net/stf/lp/character%20update_0516_Img_PNG/2_LINE_Store_PNG/09_id.png');
        message.notificationDisabled(false);
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

  it('sendPushMessage() method to send message with video', (done) => {
    Line
      .sendPushMessage(accessToken, (message) => {
        message.to(process.env.USER_ID);
        message.video('https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg', 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4');
        message.notificationDisabled(true);
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

  it('sendPushMessage() method to send message with audio', (done) => {
    Line
      .sendPushMessage(accessToken, (message) => {
        message.to(process.env.USER_ID);
        message.audio('https://bookslifestorage.s3-ap-southeast-1.amazonaws.com/samplemusic.mp3', 149400);
        message.notificationDisabled(false);
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

  it('sendPushMessage() method to send message with location', (done) => {
    Line
      .sendPushMessage(accessToken, (message) => {
        message.to(process.env.USER_ID);
        message.location('I was here', 'Jl. Kapten Muslim', 3.599285, 98.645255);
        message.notificationDisabled(false);
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

  it('sendPushMessage() method to send message with quick reply', (done) => {
    Line
      .sendPushMessage(accessToken, (message) => {
        message.to(process.env.USER_ID);
        message.quickReply('I want to test send push message with quick reply :)', (reply) => {
          reply.text('Yes', 'Yes');
          reply.camera('Camera');
          reply.cameraRoll('Camera roll');
          reply.location('Location');
        });
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
