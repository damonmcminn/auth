var parseHeader = require('../lib/parseHeader');

describe('ParseHeader', function() {

  it('should throw an Error if passed no header type', function() {
    expect(parseHeader).toThrow();
  });

});
