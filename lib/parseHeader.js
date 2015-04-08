'use strict';
module.exports = ParseHeader;

function ParseHeader(headerType) {
  /**
   * @param {string} headerType - which Authorization header to parse
   */

  var headerTypes = {
    basic: 'Basic ',
    token: 'Bearer '
  };

  var type = headerTypes[headerType];

  return function(header) {
    /**
     * @param {string} header - in form "{type} {value}"
     */
  }

  return RegExp(bearer).test(header) ? header.replace(bearer, '') : false;
}
