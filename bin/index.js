#!/usr/bin/env node
const program = require('commander');
const { green, white } = require('../src/utils/log');
const getFixtures = require('../src/fixtures');
const getGroups = require('../src/groups');
const chalk = require('chalk');
const moment = require('moment');
const { groupBy, pickBy } = require('lodash');

const Table = require('cli-table');

// Options
program
    .option('-f, --fixtures', 'fixtures')
    .option('-G, --groups', 'groups')
    .option('-g, --group [value]', 'group')
    .option('-t, --team [value]', 'team')
    .option('-p, --players [value]', 'team')
    .parse(process.argv);

// Runner
(async () => {
    const fixtures = program.fixtures ? await getFixtures({ ...program }) : [];
    const dates = {};

    const groupedFixtures = groupBy(fixtures, (f) => 
        moment(f.date).format('ddd D MMMM Y'));

    Object.keys(groupedFixtures).forEach((key) => {
        console.log(chalk.yellow(key));
        groupedFixtures[key].forEach((fixture) => {
            const time = moment(fixture.date).format('H:mm');
            console.log(`${chalk.green(time)} ${fixture.homeTeamName} ${chalk.blue('vs')} ${fixture.awayTeamName}`);
        });
    });


    const groups = program.groups || program.group ? await getGroups() : {};
    const filteredGroups = (program.team)
        ? Object.values(groups).map((group) => {
            const hasTeam = group.filter((team) =>
                team.team.toLowerCase() === program.team.toLowerCase());
            return hasTeam.length > 0 ? group : null;
        })
        : Object.values(groups).map((group) => group);
    
    filteredGroups
        .filter((table) => !program.group || program.group.toUpperCase() === table)
        .forEach((table) => {
            if (!table) return;

            var groupTable = new Table({
                head: [chalk.blue('Team'), 'P', 'GF', 'GA', 'GD', 'P'],
                colWidths: [12, 4, 4, 4, 4, 4],
                chars: { 'top': '═' , 'top-mid': '╤' , 'top-left': '╔' , 'top-right': '╗'
                , 'bottom': '═' , 'bottom-mid': '╧' , 'bottom-left': '╚' , 'bottom-right': '╝'
                , 'left': '║' , 'left-mid': '╟' , 'mid': '─' , 'mid-mid': '┼'
                , 'right': '║' , 'right-mid': '╢' , 'middle': '│' }
            });
            white(`---------------`)
            white(`Group ${table[0].group}`)
            white(`---------------`)

            groupTable.push(...table.sort((a, b) => a.rank + b.rank).map(({
                team, points, playedGames, goals, goalsAgainst, goalDifference
            }) => [team, playedGames, goals, goalsAgainst, goalDifference, points]));
            white(groupTable.toString());
        });
})();