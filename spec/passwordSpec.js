const password = require('../lib/password');

describe('Password', function() {

  describe('#hash', function() {

    it('should return false if password undefined or !== string', function(done) {
      var noPass = password.hash();
      var notAString = password.hash(1);

      Promise.all([noPass, notAString])
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
