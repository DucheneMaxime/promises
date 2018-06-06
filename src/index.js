const fs = require('fs-extra');
var pubService = require('./services/pubs.services.js');

fs.ensureDir('./temp')
.then(fs.copy('mocks/pubs.json', 'temp/pubs.json'))
.then(fs.watch('mocks/pubs.json', (curr, prev) => {
    console.log(curr);
    fs.readFile('mocks/pubs.json', 'utf8', function(err, data){
        console.log(data);
    });
}));