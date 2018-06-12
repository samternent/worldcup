const axios = require('axios');

const instance = axios.create({
  // baseURL: 'http://api.football-data.org/v1
  headers: {
    'x-auth-token': '1f0b613e3073460b8fbcdfd0c8b6f243',
  }
});

module.exports = instance;