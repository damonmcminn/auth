const password = require('../lib/password');

describe('Password', function() {

  describe('#hash', function() {

    it('should return null if password undefined, "" or !== string', function(done) {
      Promise.all([
        password.hash(),
        password.hash(1),
        password.hash({}),
        password.hash([]),
        password.hash('')
      ])
      .then(function(values) {
        values.forEach(function(val) {
          expect(val).toBe(null);
        });
        done();
      });
    });

    it('should return a hash', function(done) {
      Promise.all([
        password.hash('foo'),
        password.hash('bar'),
        password.hash('this is a very long password')
      ])
      .then(function(values) {
        values.forEach(function(val) {
          expect(val.length).toBe(60);
        });
        done();
      });
    });
  });

  describe('#check', function() {
    var check = password.check;

    it('should return null if missing arguments', function(done) {
      Promise.all([
        check(),
        check('password')
      ])
      .then(function(values) {
        values.forEach(function(val) {
          expect(val).toBe(null);
        });
        done()
      });
    });

    it('should return false if password doesn\'t match', function(done) {
      password.hash('password')
        .then(function(hashed) {
          Promise.all([
            check(hashed, hashed),
            check('foo', hashed)
          ])
          .then(function(checked) {
            checked.forEach(function(val) {
              expect(val).toBe(false);
            });
            done();
          });
        });
    });
  });

});
