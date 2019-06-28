const chai = require('chai');
const path = require('path');

const Line = require('../index').connect({
  access_token: process.env.ACCESS_TOKEN,
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.CLIENT_SECRET,
});

chai.should();

let accessToken;
let richmenuId;
let richMenu;

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

  it('getQuotaMessage() method to gets the number of messages sent in the current month', (done) => {
    Line
      .getQuotaMessage(accessToken)
      .then((results) => {
        results.should.be.a('object');
        done();
      })
      .catch((error) => {
        done(error);
      });
  });

  it('getReplyMessageConsumption() method to gets the number of reply messages sent', (done) => {
    const date = new Date().toISOString().split('T')[0].substr(0, 19).replace(/-/g, '');

    Line
      .getReplyMessageConsumption(accessToken, date)
      .then((results) => {
        results.should.be.a('object');
        done();
      })
      .catch((error) => {
        done(error);
      });
  });

  it('getPushMessageConsumption() method to gets the number of push messages sent', (done) => {
    const date = new Date().toISOString().split('T')[0].substr(0, 19).replace(/-/g, '');

    Line
      .getPushMessageConsumption(accessToken, date)
      .then((results) => {
        results.should.be.a('object');
        done();
      })
      .catch((error) => {
        done(error);
      });
  });

  it('getMulticastMessageConsumption() method to gets the number of multicast messages sent', (done) => {
    const date = new Date().toISOString().split('T')[0].substr(0, 19).replace(/-/g, '');

    Line
      .getMulticastMessageConsumption(accessToken, date)
      .then((results) => {
        results.should.be.a('object');
        done();
      })
      .catch((error) => {
        done(error);
      });
  });

  it('getBroadcastMessageConsumption() method to gets the number of broadcast messages sent', (done) => {
    const date = new Date().toISOString().split('T')[0].substr(0, 19).replace(/-/g, '');

    Line
      .getBroadcastMessageConsumption(accessToken, date)
      .then((results) => {
        results.should.be.a('object');
        done();
      })
      .catch((error) => {
        done(error);
      });
  });

  it('getTargetLimit() method to get limit messages in the current month', (done) => {
    Line
      .getTargetLimit(accessToken)
      .then((results) => {
        results.should.be.a('object');
        done();
      })
      .catch((error) => {
        done(error);
      });
  });

  it('getUserProfile() method to gets user information', (done) => {
    Line
      .getUserProfile(accessToken, process.env.USER_ID)
      .then((results) => {
        results.should.be.a('object');
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

  it('createRichMenu() method to create rich menu object', (done) => {
    Line
      .createRichMenu(accessToken, (menu) => {
        menu.sizeMenu();
        menu.selectedMenu();
        menu.nameMenu('Rich menu');
        menu.chatbar('Tap to open');
        menu.area(0, 0, 385, 372, (tap) => {
          tap.text('Test 1', 'Test 1');
        });
        menu.area(385, 0, 385, 372, (tap) => {
          tap.text('Test 2', 'Test 2');
        });
        menu.area(770, 0, 385, 372, (tap) => {
          tap.text('Test 3', 'Test 3');
        });
      })
      .then((results) => {
        richmenuId = results.richMenuId;
        results.should.be.a('object');
        done();
      })
      .catch((error) => {
        done(error);
      });
  });

  it('uploadRichMenuImage() method to upload rich menu image', (done) => {
    const imagePath = path.join(__dirname, '/testrichmenu.jpg');

    Line
      .uploadRichMenuImage(accessToken, richmenuId, imagePath)
      .then((results) => {
        results.should.be.a('object');
        done();
      })
      .catch((error) => {
        done(error);
      });
  });

  it('getRichMenuList() method to gets rich menu', (done) => {
    Line
      .getRichMenuList(accessToken)
      .then((results) => {
        richMenu = results;
        results.should.be.a('object');
        done();
      })
      .catch((error) => {
        done(error);
      });
  });

  it('getRichMenu() method to get rich menu', (done) => {
    Line
      .getRichMenu(accessToken, richMenu.richmenus[0].richMenuId)
      .then((results) => {
        results.should.be.a('object');
        done();
      })
      .catch((error) => {
        done(error);
      });
  });

  it('setDefaultRichMenu() method to set rich menu as a default', (done) => {
    Line
      .setDefaultRichMenu(accessToken, richMenu.richmenus[0].richMenuId)
      .then((results) => {
        results.should.be.a('object');
        done();
      })
      .catch((error) => {
        done(error);
      });
  });

  it('cancelDefaultRichMenu() method to remove default rich menu', (done) => {
    Line
      .cancelDefaultRichMenu(accessToken)
      .then((results) => {
        results.should.be.a('object');
        done();
      })
      .catch((error) => {
        done(error);
      });
  });

  it('linkRichMenuToUser() method to set rich menu for spesific user', (done) => {
    Line
      .linkRichMenuToUser(accessToken, process.env.USER_ID, richMenu.richmenus[0].richMenuId)
      .then((results) => {
        results.should.be.a('object');
        done();
      })
      .catch((error) => {
        done(error);
      });
  });

  it('getRichMenuUser() method to get of the rich menu linked to a user', (done) => {
    Line
      .getRichMenuUser(accessToken, process.env.USER_ID)
      .then((results) => {
        results.should.be.a('object');
        done();
      })
      .catch((error) => {
        done(error);
      });
  });

  it('unlinkRichMenuFromMultipleUser() method to unlike rich menu from multiple users', (done) => {
    Line
      .unlinkRichMenuFromMultipleUser(accessToken, [process.env.USER_ID])
      .then((results) => {
        results.should.be.a('object');
        done();
      })
      .catch((error) => {
        done(error);
      });
  });

  it('linkRichMenuToMultipleUser() method to set rich menu for multiple user', (done) => {
    Line
      .linkRichMenuToMultipleUser(accessToken, [process.env.USER_ID], richMenu.richmenus[0].richMenuId)
      .then((results) => {
        results.should.be.a('object');
        done();
      })
      .catch((error) => {
        done(error);
      });
  });

  it('unlinkRichMenuFromUser() method to unlike rich menu from a user', (done) => {
    Line
      .unlinkRichMenuFromUser(accessToken, [process.env.USER_ID])
      .then((results) => {
        results.should.be.a('object');
        done();
      })
      .catch((error) => {
        done(error);
      });
  });

  it('deleteRichMenu() method to remove rich menu', (done) => {
    richMenu.richmenus.forEach((menu, index) => {
      Line
        .deleteRichMenu(accessToken, menu.richMenuId)
        .then((results) => {
          results.should.be.a('object');
          if (richMenu.richmenus.length === (index + 1)) done();
        })
        .catch((error) => {
          done(error);
        });
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
