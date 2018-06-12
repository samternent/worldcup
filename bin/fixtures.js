#!/usr/bin/env node
const axios = require('axios');
const chalk = require('chalk');
const log = console.log;

(async () => {
    const resp = await axios.get('http://api.football-data.org/v1/competitions/467/fixtures?timeFrame=n5');
    const { status, data } = resp;

    // console.log(status);
    // console.log(data.fixtures);
    if (status != 200) return;

    data.fixtures.forEach((fixture) => {
        if (!fixture.homeTeamName) return;
        log(chalk.green(`${fixture.homeTeamName} vs ${fixture.awayTeamName}`))
    })
})()