'use strict';
module.exports = ParseHeader;

function ParseHeader(authType) {
  /**
   * @param {string} authType - which Authorization header to parse (lowercase)
   */
  var authTypes = {
    basic: 'Basic ',
    token: 'Bearer '
  };

  var message;
  var type = authTypes[authType];

  if (!authType || !type) {
    throw new Error(`Authorization header incorrect (${authType})`);
  }

  return function(header) {
    /**
     * @param {string} header - in form "{type} {value}"
     */
    // ensure header being parsed is in correct format
    var validHeader = RegExp(type).test(header);

    if (!validHeader) {
      return false;
    }
    var str = header.replace(type, '');

    switch (authType) {
      case 'token':
        return (str.length > 0) ? str : false;
      case 'basic':
        return decodeBasic(str);
    }
  }
}

/* PRIVATE */
function decodeBasic(str) {
  /**
   * @param {str} str - Base64 encoded string in form user:password
   * @returns {Object|boolean} - {user, password}|false
   */
  var split = (new Buffer(str, 'base64'))
    .toString('utf8')
    .split(':'); // problem if none?

  return !(split.length === 2) ? false : {
    user: split[0],
    password: split[1]
  }
}
