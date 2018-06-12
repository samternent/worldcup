const chalk = require('chalk');
const log = console.log;

module.exports = {
    green: (message) => log(chalk.green(message)),
    white: (message) => log(chalk.white(message)),
};