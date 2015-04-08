# auth-utilities
API authentication utilities

## Installation
`npm install --save auth-utilities`

## Usage
```javascript
var auth = require('auth-utilities');

// auth.password(ROUNDS)
// ROUNDS: (optional) number of bcrypt rounds, default 10
var password = auth.password(10);

// auth.token(SECRET)
// SECRET: string for signing JWT
// auth.token() => ReferenceError: secret undefined
var token = auth.token('secret');

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
