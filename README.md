# auth
API authentication utilities

## Installation
`npm install --save auth`

## Usage
```javascript
var auth = require('auth');
// auth.password(ROUNDS)
// ROUNDS - OPTIONAL number of bcrypt rounds
// defaults to 10

var password = auth.password(10);
var token = auth.token('secret'); // secret for signing JWT
// auth.token() => ReferenceError: secret undefined

var hashedPassword;

// returns a Promise
password.hash('password')
  .then(function(hash) {
    hashedPassword = hash;
  });

// returns a Promise
password.check('password', hashedPassword)
  .then(function(isValid) {
    console.log(isValid);
  });
// => true

token.authenticate(token.generate({foo: 'bar'}));
// => {foo: 'bar'}
```
