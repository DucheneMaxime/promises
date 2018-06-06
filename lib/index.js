'use strict';

var fs = require('fs-extra');
var pubService = require('./services/pubs.services.js');

fs.ensureDir('./temp').then(fs.copy('mocks/pubs.json', 'temp/pubs.json')).then(fs.watch('mocks/pubs.json', function (curr, prev) {
    console.log(curr);
    fs.readFile('mocks/pubs.json', 'utf8', function (err, data) {
        console.log(data);
    });
}));
//.then(fs.copy('mocks/pubs.json', 'temp/pubs.json'))
//.then(fs.watch('temp/pubs.json'));