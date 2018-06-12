const { teams } = require('../data/teams.json');

module.exports = {
  getTeam(name) {
    if (!name) return {};
    return Object.values(teams)
      .filter((team) => team.name.toLowerCase() === name.toLowerCase())
      .reduce((acc, team) => team, {});
  }
}