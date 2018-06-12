#!/usr/bin/env node
const api = require('./utils/api');

module.exports = async ()  => {
  try {
    const { status, data } = await 
      api.get('http://api.football-data.org/v1/competitions/467/leagueTable');

    if (status != 200) return;
    
    return data.standings;
  } catch (error) {
      console.error(error);
  }
}