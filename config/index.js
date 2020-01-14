'use strict';
const os = require('os');
const hostname = os.hostname();
const env = process.env.NODE_ENV;
let local = hostname.split('.');
	local = local[local.length-1];
let credentials;
let zone;

if (env == 'production') {
    zone = "Live";
	credentials = require('./credentials');
} else {
    zone = "Local"
	credentials = require('./local_credentials');
}

console.log("hostname: "+ hostname + "["+zone+"]" +" with pid ["+process.pid+"]");

module.exports = credentials;
module.exports.config = credentials;