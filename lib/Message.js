const axios = require('axios');

class Message {
  /* istanbul ignore next */
  getContentMessage(accessToken, messageId) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'GET',
        headers: { Authorization: `Bearer ${accessToken}` },
        url: `https://api.line.me/v2/bot/message/${messageId}/content`,
      })
        .then((results) => {
          resolve(results.data);
        })
        .catch(/* istanbul ignore next */ (error) => {
          reject(error);
        });
    });
  }

  getTargetLimit(accessToken) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'GET',
        headers: { Authorization: `Bearer ${accessToken}` },
        url: 'https://api.line.me/v2/bot/message/quota',
      })
        .then((results) => {
          resolve(results.data);
        })
        .catch(/* istanbul ignore next */ (error) => {
          reject(error);
        });
    });
  }

  getQuotaMessage(accessToken) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'GET',
        headers: { Authorization: `Bearer ${accessToken}` },
        url: 'https://api.line.me/v2/bot/message/quota/consumption',
      })
        .then((results) => {
          resolve(results.data);
        })
        .catch(/* istanbul ignore next */ (error) => {
          reject(error);
        });
    });
  }

  getReplyMessageConsumption(accessToken, date) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'GET',
        headers: { Authorization: `Bearer ${accessToken}` },
        url: `https://api.line.me/v2/bot/message/delivery/reply?date=${date}`,
      })
        .then((results) => {
          resolve(results.data);
        })
        .catch(/* istanbul ignore next */ (error) => {
          reject(error);
        });
    });
  }

  getPushMessageConsumption(accessToken, date) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'GET',
        headers: { Authorization: `Bearer ${accessToken}` },
        url: `https://api.line.me/v2/bot/message/delivery/push?date=${date}`,
      })
        .then((results) => {
          resolve(results.data);
        })
        .catch(/* istanbul ignore next */ (error) => {
          reject(error);
        });
    });
  }

  getMulticastMessageConsumption(accessToken, date) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'GET',
        headers: { Authorization: `Bearer ${accessToken}` },
        url: `https://api.line.me/v2/bot/message/delivery/multicast?date=${date}`,
      })
        .then((results) => {
          resolve(results.data);
        })
        .catch(/* istanbul ignore next */ (error) => {
          reject(error);
        });
    });
  }

  /* istanbul ignore next */
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

  sendMulticastMessage(accessToken, send) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'POST',
        headers: { Authorization: `Bearer ${accessToken}` },
        data: send,
        url: 'https://api.line.me/v2/bot/message/multicast',
      })
        .then((results) => {
          resolve(results.data);
        })
        .catch(/* istanbul ignore next */ (error) => {
          reject(error);
        });
    });
  }

  broadcastMessage(accessToken, send) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'POST',
        headers: { Authorization: `Bearer ${accessToken}` },
        data: send,
        url: 'https://api.line.me/v2/bot/message/broadcast',
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
