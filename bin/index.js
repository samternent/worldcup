#!/usr/bin/env node
const program = require('commander');
const { green, white } = require('../src/utils/log');
const getFixtures = require('../src/fixtures');
const getGroups = require('../src/groups');

const Table = require('cli-table');

// Options
program
    .option('-f, --fixtures', 'fixtures')
    .option('-g, --group [value]', 'group')
    .option('-G, --groups [value]', 'groups')
    .option('-t, --team [value]', 'team')
    .option('-p, --players [value]', 'team')
    .parse(process.argv);

// Runner
(async () => {
    const fixtures = program.fixtures ? await getFixtures({ ...program }) : [];
    fixtures.forEach((fixture) =>
        green(`${fixture.homeTeamName} vs ${fixture.awayTeamName}`));


    const groups = program.groups || program.group ? await getGroups() : {};
    Object.keys(groups)
        .filter((table) => !program.group || program.group.toUpperCase() === table)
        .forEach((table) => {
            var groupTable = new Table({
                head: ['Rank', 'Team',],
                colWidths: [10, 100]
            });
            white(`Group ${table}`)
            white(`---`)
            groupTable.push(...groups[table].sort((a, b) => a.rank + b.rank).map(({team, rank}) => [rank, team]));
            white(groupTable.toString());
        });
})();