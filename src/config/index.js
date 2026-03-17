require('dotenv').config();

function loadConfig() {
  return {
    appName: process.env.APP_NAME || 'neutrogena-app-testing',
    port: process.env.PORT || 4000,
    baseUrl: process.env.BASE_URL,
    apiKey: process.env.API_KEY,
    accessToken: process.env.ACCESS_TOKEN,
    db: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD
    }
  };
}

module.exports = { loadConfig };