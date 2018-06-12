#!/usr/bin/env node
const program = require('commander');

const { fixtures, team } = program
    .option('-f, --fixtures', 'get fixtures')
    .option('-t, --team [value]', 'get fixtures')
    .parse(process.argv);

(async () => {
    if (fixtures) console.log(fixtures);
    if (team) console.log(team);
})();