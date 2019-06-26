const Message = require('./Message');
const Oauth = require('./Oauth');
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
}

module.exports = new Line();
