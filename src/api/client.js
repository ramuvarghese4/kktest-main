const axios = require('axios');

function createClient(config) {
  return axios.create({
    baseURL: config.baseUrl,
    timeout: 4000,
    headers: {
      Authorization: `Bearer ${config.accessToken}`,
      'x-api-key': config.apiKey
    }
  });
}

module.exports = { createClient };