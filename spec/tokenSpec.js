var Token = require('../lib/token');

describe('Token', function() {

  it('raise a ReferenceError if secret undefined', function() {
    expect(Token).toThrowError(ReferenceError, 'secret undefined');
  });

  var foo = Token('foo');
  var bar = Token('bar');

  var fooToken = foo.generate({name: 'foo'});
  var barToken = bar.generate({name: 'bar'});

  describe('#generate', function() {

    it('should raise an Error if payload undefined', function() {
      expect(foo.generate).toThrow();
    })

    it('should return a token', function() {
      expect(fooToken.split('.').length).toBe(3);
    });
  });

  describe('#authenticate', function() {

    it('should return false if token is: undefined, null, malformed or encoded with a different secret', function() {
      expect(foo.authenticate()).toBe(false);
      expect(foo.authenticate(null)).toBe(false);
      expect(foo.authenticate('malformed')).toBe(false);
      expect(foo.authenticate(false)).toBe(false);
      expect(foo.authenticate(true)).toBe(false);
      expect(bar.authenticate(fooToken)).toBe(false);
    });

    it('should return a decoded token', function() {
      expect(foo.authenticate(fooToken).name).toBe('foo');
      expect(bar.authenticate(barToken).name).toBe('bar');
    });

  });
});
