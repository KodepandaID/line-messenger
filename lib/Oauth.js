const axios = require('axios');
const qs = require('querystring');


class Oauth {
  getAccessToken(clientId, clientSecret) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        data: qs.stringify({
          grant_type: 'client_credentials',
          client_id: clientId,
          client_secret: clientSecret,
        }),
        url: 'https://api.line.me/v2/oauth/accessToken',
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

module.exports = new Oauth();
