'use strict';
module.exports = Token;

const jwt = require('jwt-simple');

function Token(secret) {
  const SECRET = secret;

  if (typeof SECRET === 'string') {
    return {
      generate: function(payload) {
        return jwt.encode(payload, SECRET);
      },
      authenticate: function(token) {
        try {
          return jwt.decode(token, SECRET);
        } catch (e) {
          return false;
        }
      }
    }
  } else {
    throw new ReferenceError('secret undefined');
  }
}
