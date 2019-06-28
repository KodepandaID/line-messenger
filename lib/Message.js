const axios = require('axios');
const fs = require('fs');

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

  getBroadcastMessageConsumption(accessToken, date) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'GET',
        headers: { Authorization: `Bearer ${accessToken}` },
        url: `https://api.line.me/v2/bot/message/delivery/broadcast?date=${date}`,
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

  createRichMenu(accessToken, send) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'POST',
        headers: { Authorization: `Bearer ${accessToken}` },
        data: send,
        url: 'https://api.line.me/v2/bot/richmenu',
      })
        .then((results) => {
          resolve(results.data);
        })
        .catch(/* istanbul ignore next */ (error) => {
          reject(error);
        });
    });
  }

  uploadRichMenuImage(accessToken, richMenuId, imagePath) {
    return new Promise(async (resolve, reject) => {
      const buffer = await new Promise((resolve, reject) => {
        fs.readFile(imagePath, (err, buf) => {
          /* istanbul ignore if */
          if (err) reject(err);
          else resolve(buf);
        });
      });

      axios({
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': `${imagePath.includes('png') ? 'image/png' : 'image/jpeg'}`,
          'Content-Length': buffer.length,
        },
        data: buffer,
        url: `https://api.line.me/v2/bot/richmenu/${richMenuId}/content`,
      })
        .then((results) => {
          resolve(results.data);
        })
        .catch(/* istanbul ignore next */ (error) => {
          reject(error);
        });
    });
  }

  getRichMenuList(accessToken) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'GET',
        headers: { Authorization: `Bearer ${accessToken}` },
        url: 'https://api.line.me/v2/bot/richmenu/list',
      })
        .then((results) => {
          resolve(results.data);
        })
        .catch(/* istanbul ignore next */ (error) => {
          reject(error);
        });
    });
  }

  getRichMenu(accessToken, richMenuId) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'GET',
        headers: { Authorization: `Bearer ${accessToken}` },
        url: `https://api.line.me/v2/bot/richmenu/${richMenuId}`,
      })
        .then((results) => {
          resolve(results.data);
        })
        .catch(/* istanbul ignore next */ (error) => {
          reject(error);
        });
    });
  }

  setDefaultRichMenu(accessToken, richMenuId) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'POST',
        headers: { Authorization: `Bearer ${accessToken}` },
        url: `https://api.line.me/v2/bot/user/all/richmenu/${richMenuId}`,
      })
        .then((results) => {
          resolve(results.data);
        })
        .catch(/* istanbul ignore next */ (error) => {
          reject(error);
        });
    });
  }

  cancelDefaultRichMenu(accessToken) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'DELETE',
        headers: { Authorization: `Bearer ${accessToken}` },
        url: 'https://api.line.me/v2/bot/user/all/richmenu',
      })
        .then((results) => {
          resolve(results.data);
        })
        .catch(/* istanbul ignore next */ (error) => {
          reject(error);
        });
    });
  }

  linkRichMenuToUser(accessToken, userId, richMenuId) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'POST',
        headers: { Authorization: `Bearer ${accessToken}` },
        url: `https://api.line.me/v2/bot/user/${userId}/richmenu/${richMenuId}`,
      })
        .then((results) => {
          resolve(results.data);
        })
        .catch(/* istanbul ignore next */ (error) => {
          reject(error);
        });
    });
  }

  linkRichMenuToMultipleUser(accessToken, userIds, richMenuId) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'POST',
        headers: { Authorization: `Bearer ${accessToken}` },
        data: {
          richMenuId,
          userIds,
        },
        url: 'https://api.line.me/v2/bot/richmenu/bulk/link',
      })
        .then((results) => {
          resolve(results.data);
        })
        .catch(/* istanbul ignore next */ (error) => {
          reject(error);
        });
    });
  }

  getRichMenuUser(accessToken, userId) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'GET',
        headers: { Authorization: `Bearer ${accessToken}` },
        url: `https://api.line.me/v2/bot/user/${userId}/richmenu`,
      })
        .then((results) => {
          resolve(results.data);
        })
        .catch(/* istanbul ignore next */ (error) => {
          reject(error);
        });
    });
  }

  unlinkRichMenuFromUser(accessToken, userId) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'DELETE',
        headers: { Authorization: `Bearer ${accessToken}` },
        url: `https://api.line.me/v2/bot/user/${userId}/richmenu`,
      })
        .then((results) => {
          resolve(results.data);
        })
        .catch(/* istanbul ignore next */ (error) => {
          reject(error);
        });
    });
  }

  unlinkRichMenuFromMultipleUser(accessToken, userIds) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'POST',
        headers: { Authorization: `Bearer ${accessToken}` },
        data: {
          userIds,
        },
        url: 'https://api.line.me/v2/bot/richmenu/bulk/unlink',
      })
        .then((results) => {
          resolve(results.data);
        })
        .catch(/* istanbul ignore next */ (error) => {
          reject(error);
        });
    });
  }

  deleteRichMenu(accessToken, richMenuId) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'DELETE',
        headers: { Authorization: `Bearer ${accessToken}` },
        url: `https://api.line.me/v2/bot/richmenu/${richMenuId}`,
      })
        .then((results) => {
          resolve(results.data);
        })
        .catch(/* istanbul ignore next */ (error) => {
          reject(error);
        });
    });
  }

  getUserProfile(accessToken, userId) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'GET',
        headers: { Authorization: `Bearer ${accessToken}` },
        url: `https://api.line.me/v2/bot/profile/${userId}`,
      })
        .then((results) => {
          resolve(results.data);
        })
        .catch(/* istanbul ignore next */ (error) => {
          reject(error);
        });
    });
  }

  getAccountLinkToken(accessToken, userId) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'POST',
        headers: { Authorization: `Bearer ${accessToken}` },
        url: `https://api.line.me/v2/bot/user/${userId}/linkToken`,
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
