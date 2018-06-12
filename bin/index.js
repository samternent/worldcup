#!/usr/bin/env node
const program = require('commander');
const { green } = require('../src/utils/log');
const getFixtures = require('../src/fixtures');

// Options
program
    .option('-f, --fixtures', 'fixtures')
    .option('-g, --group [value]', 'group')
    .option('-t, --team [value]', 'team')
    .parse(process.argv);

// Runner
(async () => {
    const fixtures = program.fixtures ? await getFixtures({ ...program }) : [];

    fixtures.forEach((fixture) =>
        green(`${fixture.homeTeamName} vs ${fixture.awayTeamName}`));
})();