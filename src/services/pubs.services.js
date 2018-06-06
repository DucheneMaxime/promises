import * as Pub from '../entity/Pub.js';
import * as Beer from '../entity/Beer.js';
import * as OpenHours from '../entity/OpenHours.js';
import * as Owner from '../entity/Owner.js';
var pubs = require('../../mocks/pubs.json');
const moment = require('moment');

function tousPubs(){
    var res = [];
    pubs.forEach(pub => {
        let pubToPush = new Pub.Pub(pub['name'], pub['owner'], pub['openDays'], pub['openHours'], pub['beers']);
        res.push(pubToPush);
    });
    return res;
}

function pubsOuverts(){
    var res = [];
    pubs.forEach(pub => {
        if(pub['openDays'].includes(moment().format('dddd'))){
            let pubToPush = new Pub.Pub(pub['name'], pub['owner'], pub['openDays'], pub['openHours'], pub['beers']);
            res.push(pubToPush);
        }
    });
    return res;
}

module.exports = {
    tousPubs: tousPubs,
    pubsOuverts: pubsOuverts
};