'use strict';
module.exports = Auth;

const password = require('./lib/password');
const token = require('./lib/token');
const parseHeader = require('./lib/parseHeader');

function Auth() {}

Auth.password = password;
Auth.token = token;
Auth.parseHeader = parseHeader;
