'use strict';
module.exports = Password;

const bluebird = require('bluebird');
const bcrypt = require('bcrypt');
const hash = bluebird.promisify(bcrypt.hash);
const compare = bluebird.promisify(bcrypt.compare);

function Password() {};

Password.hash = function(word) {
  var goodInput = !(!word || (typeof word !== 'string'));

  if (goodInput) {
    return hash(word, 10)
      .catch(function(err) {
        return false;
      })
      .then(function(hashed) {
        return hashed;
      });
  } else {
    return Promise.resolve(false);
  }
}
