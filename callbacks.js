'use strict';

var fs = require('fs');

fs.readFile('dummy', 'utf8', (err, bigFileContents) => {
    if (err) throw err;
    console.log('*** PRINTING BIG FILE CONTENTS... ***');
    console.log(bigFileContents);
    console.log('*** FILE READ IS COMPLETE FOR BIGFILE ***');

});

fs.readFile('package.json', 'utf8', function (err, smallFileContents) {
    console.log('*** PRINTING SMALL FILE CONTENTS... ***');
    console.log(smallFileContents);
    console.log('*** FILE READ IS COMPLETE FOR SMALL FILE ***');
})

console.log('Reading file contents... Please wait...');
