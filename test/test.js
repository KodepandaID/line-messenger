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

  it('sendPushMessage() method to send text message', (done) => {
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

  it('sendPushMessage() method to send imagemap', (done) => {
    Line
      .sendPushMessage(accessToken, (message) => {
        message.to(process.env.USER_ID);
        message.imageMap('https://dummyimage.com/1920x1080/ffffff/0011fa.jpg&text=IMAGEMAP', 'This is an imagemap', (imagemap) => {
          imagemap.video('https://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4?_ignored=', 'https://dummyimage.com/1920x1080/ffffff/0011fa.jpg&text=IMAGEMAP');
          imagemap.externalLink('https://yudhapratama.com', 'See more');
          imagemap.actionUri('https://yudhapratama.com');
          imagemap.actionMessage('Hello', 'Hello');
          message.notificationDisabled(false);
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

  it('sendPushMessage() method to send message with quick reply', (done) => {
    Line
      .sendPushMessage(accessToken, (message) => {
        message.to(process.env.USER_ID);
        message.quickReply('I want to test send push message with quick reply :)', (reply) => {
          reply.text('Yes', 'Yes');
          reply.camera('Camera');
          reply.cameraRoll('Camera roll');
          reply.location('Location');
          reply.postback('Buy', 'Buy', 'action=buy');
          reply.dateTimePicker('Select date', 'action=date', '2017-12-25t00:00', '2100-12-31T23:59', '1900-01-01T00:00');
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

  it('sendMulticastMessage() method to send messsage to many users', (done) => {
    Line
      .sendMulticastMessage(accessToken, (message) => {
        message.to([process.env.USER_ID]);
        message.text('Send multicast message');
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

  it('broadcastMessage() method to send broadcast messages', (done) => {
    Line
      .broadcastMessage(accessToken, (message) => {
        message.to([process.env.USER_ID]);
        message.text('Send broadcast message');
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
