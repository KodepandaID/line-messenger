const Message = require('./Message');
const Oauth = require('./Oauth');
const RichMenu = require('./schema/RichMenu');
const Schema = require('./Schema');

class Line {
  constructor() {
    this.access_token = '';
    this.client_id = '';
    this.cliet_secret = '';
  }

  connect(config) {
    this.access_token = config.access_token;
    this.client_id = config.client_id;
    this.cliet_secret = config.client_secret;

    return this;
  }

  getAccessToken() {
    return new Promise((resolve, reject) => {
      Oauth
        .getAccessToken(this.client_id, this.cliet_secret)
        .then((results) => {
          resolve(results);
        })
        .catch(/* istanbul ignore next */ (error) => {
          reject(error);
        });
    });
  }

  revokeAccessToken(accessToken) {
    return new Promise((resolve, reject) => {
      Oauth
        .revokeAccessToken(accessToken)
        .then((results) => {
          resolve(results);
        })
        .catch(/* istanbul ignore next */ (error) => {
          reject(error);
        });
    });
  }

  getTargetLimit(accessToken) {
    return new Promise((resolve, reject) => {
      Message
        .getTargetLimit(accessToken)
        .then((results) => {
          resolve(results);
        })
        .catch(/* istanbul ignore next */ (error) => {
          reject(error);
        });
    });
  }

  /* istanbul ignore next */
  getContentMessage(accessToken, messageId) {
    return new Promise((resolve, reject) => {
      Message
        .getContentMessage(accessToken, messageId)
        .then((results) => {
          resolve(results);
        })
        .catch(/* istanbul ignore next */ (error) => {
          reject(error);
        });
    });
  }

  getQuotaMessage(accessToken) {
    return new Promise((resolve, reject) => {
      Message
        .getQuotaMessage(accessToken)
        .then((results) => {
          resolve(results);
        })
        .catch(/* istanbul ignore next */ (error) => {
          reject(error);
        });
    });
  }

  getReplyMessageConsumption(accessToken, date) {
    return new Promise((resolve, reject) => {
      Message
        .getReplyMessageConsumption(accessToken, date)
        .then((results) => {
          resolve(results);
        })
        .catch(/* istanbul ignore next */ (error) => {
          reject(error);
        });
    });
  }

  getPushMessageConsumption(accessToken, date) {
    return new Promise((resolve, reject) => {
      Message
        .getPushMessageConsumption(accessToken, date)
        .then((results) => {
          resolve(results);
        })
        .catch(/* istanbul ignore next */ (error) => {
          reject(error);
        });
    });
  }

  getMulticastMessageConsumption(accessToken, date) {
    return new Promise((resolve, reject) => {
      Message
        .getMulticastMessageConsumption(accessToken, date)
        .then((results) => {
          resolve(results);
        })
        .catch(/* istanbul ignore next */ (error) => {
          reject(error);
        });
    });
  }

  getBroadcastMessageConsumption(accessToken, date) {
    return new Promise((resolve, reject) => {
      Message
        .getBroadcastMessageConsumption(accessToken, date)
        .then((results) => {
          resolve(results);
        })
        .catch(/* istanbul ignore next */ (error) => {
          reject(error);
        });
    });
  }

  /* istanbul ignore next */
  replyMessage(accessToken, replyToken, callback) {
    return new Promise((resolve, reject) => {
      callback(Schema);
      const body = Schema.schemaReplyBuilder(replyToken);

      Message
        .replyMessage(accessToken, body)
        .then((results) => {
          resolve(results);
        })
        .catch(/* istanbul ignore next */ (error) => {
          reject(error);
        });
    });
  }

  sendPushMessage(accessToken, callback) {
    return new Promise((resolve, reject) => {
      callback(Schema);
      const body = Schema.schemaBuilder();

      Message
        .sendPushMessage(accessToken, body)
        .then((results) => {
          resolve(results);
        })
        .catch(/* istanbul ignore next */ (error) => {
          reject(error);
        });
    });
  }

  sendMulticastMessage(accessToken, callback) {
    return new Promise((resolve, reject) => {
      callback(Schema);
      const body = Schema.schemaBuilder();

      Message
        .sendMulticastMessage(accessToken, body)
        .then((results) => {
          resolve(results);
        })
        .catch(/* istanbul ignore next */ (error) => {
          reject(error);
        });
    });
  }

  broadcastMessage(accessToken, callback) {
    return new Promise((resolve, reject) => {
      callback(Schema);
      const body = Schema.schemaBuilder();

      Message
        .broadcastMessage(accessToken, body)
        .then((results) => {
          resolve(results);
        })
        .catch(/* istanbul ignore next */ (error) => {
          reject(error);
        });
    });
  }

  createRichMenu(accessToken, callback) {
    return new Promise((resolve, reject) => {
      callback(RichMenu);
      const body = RichMenu.schemaBuilder();

      Message
        .createRichMenu(accessToken, body)
        .then((results) => {
          resolve(results);
        })
        .catch(/* istanbul ignore next */ (error) => {
          reject(error);
        });
    });
  }

  uploadRichMenuImage(accessToken, richMenuId, imagePath) {
    return new Promise((resolve, reject) => {
      Message
        .uploadRichMenuImage(accessToken, richMenuId, imagePath)
        .then((results) => {
          resolve(results);
        })
        .catch(/* istanbul ignore next */ (error) => {
          reject(error);
        });
    });
  }

  getRichMenuList(accessToken) {
    return new Promise((resolve, reject) => {
      Message
        .getRichMenuList(accessToken)
        .then((results) => {
          resolve(results);
        })
        .catch(/* istanbul ignore next */ (error) => {
          reject(error);
        });
    });
  }

  getRichMenu(accessToken, richMenuId) {
    return new Promise((resolve, reject) => {
      Message
        .getRichMenu(accessToken, richMenuId)
        .then((results) => {
          resolve(results);
        })
        .catch(/* istanbul ignore next */ (error) => {
          reject(error);
        });
    });
  }

  setDefaultRichMenu(accessToken, richMenuId) {
    return new Promise((resolve, reject) => {
      Message
        .setDefaultRichMenu(accessToken, richMenuId)
        .then((results) => {
          resolve(results);
        })
        .catch(/* istanbul ignore next */ (error) => {
          reject(error);
        });
    });
  }

  cancelDefaultRichMenu(accessToken) {
    return new Promise((resolve, reject) => {
      Message
        .cancelDefaultRichMenu(accessToken)
        .then((results) => {
          resolve(results);
        })
        .catch(/* istanbul ignore next */ (error) => {
          reject(error);
        });
    });
  }

  linkRichMenuToUser(accessToken, userId, richMenuId) {
    return new Promise((resolve, reject) => {
      Message
        .linkRichMenuToUser(accessToken, userId, richMenuId)
        .then((results) => {
          resolve(results);
        })
        .catch(/* istanbul ignore next */ (error) => {
          reject(error);
        });
    });
  }

  linkRichMenuToMultipleUser(accessToken, userId, richMenuId) {
    return new Promise((resolve, reject) => {
      Message
        .linkRichMenuToMultipleUser(accessToken, userId, richMenuId)
        .then((results) => {
          resolve(results);
        })
        .catch(/* istanbul ignore next */ (error) => {
          reject(error);
        });
    });
  }

  unlinkRichMenuFromUser(accessToken, userId) {
    return new Promise((resolve, reject) => {
      Message
        .unlinkRichMenuFromUser(accessToken, userId)
        .then((results) => {
          resolve(results);
        })
        .catch(/* istanbul ignore next */ (error) => {
          reject(error);
        });
    });
  }

  unlinkRichMenuFromMultipleUser(accessToken, userId) {
    return new Promise((resolve, reject) => {
      Message
        .unlinkRichMenuFromMultipleUser(accessToken, userId)
        .then((results) => {
          resolve(results);
        })
        .catch(/* istanbul ignore next */ (error) => {
          reject(error);
        });
    });
  }

  getRichMenuUser(accessToken, userId) {
    return new Promise((resolve, reject) => {
      Message
        .getRichMenuUser(accessToken, userId)
        .then((results) => {
          resolve(results);
        })
        .catch(/* istanbul ignore next */ (error) => {
          reject(error);
        });
    });
  }

  deleteRichMenu(accessToken, richMenuId) {
    return new Promise((resolve, reject) => {
      Message
        .deleteRichMenu(accessToken, richMenuId)
        .then((results) => {
          resolve(results);
        })
        .catch(/* istanbul ignore next */ (error) => {
          reject(error);
        });
    });
  }

  getUserProfile(accessToken, userId) {
    return new Promise((resolve, reject) => {
      Message
        .getUserProfile(accessToken, userId)
        .then((results) => {
          resolve(results);
        })
        .catch(/* istanbul ignore next */ (error) => {
          reject(error);
        });
    });
  }

  getAccountLinkToken(accessToken, userId) {
    return new Promise((resolve, reject) => {
      Message
        .getAccountLinkToken(accessToken, userId)
        .then((results) => {
          resolve(results);
        })
        .catch(/* istanbul ignore next */ (error) => {
          reject(error);
        });
    });
  }
}

module.exports = new Line();
