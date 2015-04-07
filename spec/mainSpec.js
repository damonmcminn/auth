var Auth = require('../index');

describe('Auth', function() {

  /*
  it('should instantiate a new object', function() {
    expect(function() {Auth('foo')}).not.toThrow();
  });
  */
  it('should throw ReferenceError if no arguments passed', function() {
    expect(Auth).toThrowError(ReferenceError);
  });

  it('should return an object with props: #password, #token', function() {
    var auth = Auth('secret');
    expect(auth.password).toEqual(jasmine.anything());
    expect(auth.token).toEqual(jasmine.anything());
    expect(auth.token).toEqual(jasmine.anything());
  });

});
