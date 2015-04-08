'use strict';
module.exports = Password;

const bluebird = require('bluebird');
const bcrypt = require('bcrypt');
const hash = bluebird.promisify(bcrypt.hash);
const compare = bluebird.promisify(bcrypt.compare);

function Password(rounds) {

  // Default 10 if rounds undefined || !int
  var ROUNDS = Number.isInteger(rounds) ? rounds : 10;

  return {
    hash: function(word) {
      var goodInput = !(!word || (typeof word !== 'string'));

      if (goodInput) {
        return hash(word, ROUNDS)
          .catch(function(err) {
            return null;
          })
          .then(function(hashed) {
            return hashed;
          });
      } else {
        return Promise.resolve(null);
      }
    },
    check: function(word, hash) {
      return compare(word, hash)
        .then(function(valid) {
          return valid;
        })
        .catch(function(err) {
          return null;
        });
    }
  }
}
