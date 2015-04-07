const password = require('../lib/password');

describe('Password', function() {

  describe('#hash', function() {

    it('should return false if password undefined or !== string', function(done) {
      Promise.all([
        password.hash(),
        password.hash(1),
        password.hash({}),
        password.hash([])
        ])
        .then(function(values) {
          values.forEach(function(val) {
            expect(val).toBe(false);
          });
          done();
        });
    });

  });

  describe('#authenticate', function() {
  });

});
