var Token = require('../lib/token');

describe('Token', function() {
  it('should generate tokens with their own secrets', function() {
    var a = Token('a');
    var b = Token('b');
    expect(a.generate()).toBe('a');
    expect(b.generate()).toBe('b');
  });
});
