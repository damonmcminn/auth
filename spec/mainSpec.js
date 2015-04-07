var auth = require('../index');

describe('auth', function() {

  it('should return an object with props: #password, #token', function() {
    expect(auth.password).toEqual(jasmine.anything());
    expect(auth.token).toEqual(jasmine.anything());
  });

});
