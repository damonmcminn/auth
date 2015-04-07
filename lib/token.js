const jwt = require('jwt-simple');
module.exports = Token;

function Token(secret) {
  var SECRET = secret;
  return {
    generate: function(payload) {return SECRET}
  }
}
