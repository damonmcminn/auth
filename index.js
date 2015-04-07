'use strict';
module.exports = Auth;

const password = require('./lib/password');
const token = require('./lib/token');


function Auth() {}

Auth.password = password;
Auth.token = token;
