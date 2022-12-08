const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Is the base of the times table'
                })
                .option('l', {
                    alias: 'list',
                    type: 'boolean',
                    demandOption: false,
                    describe: 'display table in console'
                })
                .option('t', {
                    alias: 'up to',
                    type: 'number',
                    demandOption: true,
                    describe: 'this make up to a specific number'
                })
                .check( (argv, options) => {
                    if( isNaN( argv.b ) ){
                        throw 'Base should be a number'
                    } else {
                        return true;
                    }
                })
                .argv;

module.exports = argv;