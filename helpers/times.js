const { Console } = require('console');
const fs = require('fs');
const colors = require('colors');

const createFile = async( base = 5, list = false, upTo =10 ) => {

    try {
        
        let output = '';
        let consol = ''; // this is a reference to the console
    
        for ( let i = 1; i <= upTo; i++) {
            output += `${ base } x ${ i } = ${ base*i}\n`;
            consol += `${ base } ${ 'x'.cyan } ${ i } ${ '='.cyan } ${ base*i}\n`;
        };

        if (list) {
            console.log('==================='.rainbow);
            console.log(`   ${base} Times Table   `.rainbow);
            console.log('==================='.rainbow);
            console.log( consol );
        }
    
        // writeFileSync is other way to create a file
        fs.writeFileSync( `${base}-times-table.txt`, output );
    
        return `${base}-times-table.txt created`;
    } catch( err ) {
        throw err
    }
}

/* This is 
fs.writeFile( `${base}-times-table.txt`, output, ( err ) => {
        if (err) throw err;
    
        console.log(`${base}-times-table.txt created`);
})
*/

// to Export a function
module.exports = {
    createFile
}