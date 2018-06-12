const axios = require('axios');

const instance = axios.create({
  // baseURL: 'http://api.football-data.org/v1'
});

module.exports = instance;