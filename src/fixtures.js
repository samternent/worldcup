#!/usr/bin/env node
const api = require('./utils/api');
const { getTeam } = require('./helpers/team');

module.exports = async ({ timeFrame, team })  => {
    const teamObj = getTeam(team);

    const url = teamObj && teamObj._links
        ? teamObj._links.fixtures.href
        : 'http://api.football-data.org/v1/competitions/467/fixtures';

    try {
        const { status, data } = await 
            api.get(url, {
                params: {
                    timeFrame: 'n5',
                },
            });

        if (status != 200) return;
        
        return data.fixtures;
    } catch (error) {
        console.error(error);
    }
}