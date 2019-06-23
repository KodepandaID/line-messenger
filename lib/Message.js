const axios = require('axios');

class Message {
  replyMessage(accessToken, send) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'POST',
        headers: { Authorization: `Bearer ${accessToken}` },
        data: send,
        url: 'https://api.line.me/v2/bot/message/reply',
      })
        .then((results) => {
          resolve(results.data);
        })
        .catch(/* istanbul ignore next */ (error) => {
          reject(error);
        });
    });
  }

  sendPushMessage(accessToken, send) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'POST',
        headers: { Authorization: `Bearer ${accessToken}` },
        data: send,
        url: 'https://api.line.me/v2/bot/message/push',
      })
        .then((results) => {
          resolve(results.data);
        })
        .catch(/* istanbul ignore next */ (error) => {
          reject(error);
        });
    });
  }
}

module.exports = new Message();
