var parseHeader = require('../lib/parseHeader');

describe('ParseHeader', function() {

  it('should throw an Error if passed no header type', function() {
    var notDefined = 'Authorization header incorrect (undefined)';
    var justWrong = 'Authorization header incorrect (foo)';
    expect(parseHeader).toThrowError(Error, notDefined);
    expect(function() {parseHeader('foo')}).toThrowError(Error, justWrong);
  });

  it('should return the token part of "Bearer {token}"', function() {
    var parseToken = parseHeader('token');
    expect(parseToken('Bearer foo.bar.token')).toBe('foo.bar.token');
  });

  it('should return the {user,password} for "Basic {base64}"', function() {
    var parseBasic = parseHeader('basic');
    var str = Buffer('user:password', 'utf8').toString('base64');
    var parsed = parseBasic(`Basic ${str}`);
    expect(parsed.user).toBe('user');
    expect(parsed.password).toBe('password');
  });

  it('should return false if header is doesn\'t match type"', function() {
    var parseToken = parseHeader('basic');
    expect(parseToken('Bearer foo.bar.token')).toBe(false);
  });

  it('should return false if header is malformed"', function() {
    var parseBasic = parseHeader('basic');
    var notBase64 = parseBasic('Basic foo');
    var noString = parseBasic('Basic ');

    // var is64 = Buffer(str, 'base64')
    // is64.isEncoding('base64') => true

    expect(notBase64.user).toBe('user');
    expect(noString.user).toBe('user');
  });
});
