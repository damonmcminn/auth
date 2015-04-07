'use strict';
module.exports = Auth;

const password = require('./lib/password');
const Token = require('./lib/token');


function Auth(secret) {
  return {
    password: password,
    token: Token(secret)
  }
}
