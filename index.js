const password = require('./lib/password');
const token = require('./lib/token');

module.exports = Auth;

function Auth(secret) {
  return {
    password: password,
    token: Token(secret)
  }
}
