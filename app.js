// const { argv } = require("process");
const { createFile } = require("./helpers/times");
const argv = require('./config/yargs')

console.clear(); // This allow to clear console


createFile( argv.b, argv.l, argv.t )
    .then( fileName => console.log( fileName, 'created' ) )
    .catch( err => console.log( err ) );
