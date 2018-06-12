#!/usr/bin/env node
const program = require('commander');
const { green } = require('../src/utils/log');
const getFixtures = require('../src/fixtures');
const getGroups = require('../src/groups');

// Options
program
    .option('-f, --fixtures', 'fixtures')
    .option('-g, --group [value]', 'group')
    .option('-G, --groups [value]', 'groups')
    .option('-t, --team [value]', 'team')
    .parse(process.argv);

// Runner
(async () => {
    const fixtures = program.fixtures ? await getFixtures({ ...program }) : [];
    fixtures.forEach((fixture) =>
        green(`${fixture.homeTeamName} vs ${fixture.awayTeamName}`));


    const groups = program.groups ? await getGroups() : {};
    // console.log(groups);
    Object.values(groups).forEach((table) =>
        table.forEach(({ group, team }) => green(`${group}  ${team}`)))

})();