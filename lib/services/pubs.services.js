'use strict';

var _Pub = require('../entity/Pub.js');

var Pub = _interopRequireWildcard(_Pub);

var _Beer = require('../entity/Beer.js');

var Beer = _interopRequireWildcard(_Beer);

var _OpenHours = require('../entity/OpenHours.js');

var OpenHours = _interopRequireWildcard(_OpenHours);

var _Owner = require('../entity/Owner.js');

var Owner = _interopRequireWildcard(_Owner);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var pubs = require('../../mocks/pubs.json');
var moment = require('moment');

function tousPubs() {
    var res = [];
    pubs.forEach(function (pub) {
        var pubToPush = new Pub.Pub(pub['name'], pub['owner'], pub['openDays'], pub['openHours'], pub['beers']);
        res.push(pubToPush);
    });
    return res;
}

function pubsOuverts() {
    var res = [];
    pubs.forEach(function (pub) {
        if (pub['openDays'].includes(moment().format('dddd'))) {
            var pubToPush = new Pub.Pub(pub['name'], pub['owner'], pub['openDays'], pub['openHours'], pub['beers']);
            res.push(pubToPush);
        }
    });
    return res;
}

module.exports = {
    tousPubs: tousPubs,
    pubsOuverts: pubsOuverts
};