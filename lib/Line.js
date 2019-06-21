const Oauth = require('./Oauth');

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
}

module.exports = new Line();
