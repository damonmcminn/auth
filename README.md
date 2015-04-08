# auth-utilities
API authentication utilities

## Installation
`npm install --save auth-utilities`

## Usage
```javascript
var auth = require('auth-utilities');
```

### Auth#password
```javascript
// auth.password(ROUNDS)
// ROUNDS: (optional) number of bcrypt rounds, default 10
var password = auth.password(10);

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
```

### Auth#token
```javascript
// auth.token(SECRET)
// SECRET: string for signing JWT
// auth.token() => ReferenceError: secret undefined
var token = auth.token('secret');
var signedPayload = token.generate({foo: 'bar'});
token.authenticate(signedPayload);
// => {foo: 'bar'}
```

### Auth#parseHeader
```javascript
var parseBasic = auth.parseHeader('basic');

// Base64("decoded:base64") === ZGVjb2RlZDpiYXNlNjQ=
var header = 'Basic ZGVjb2RlZDpiYXNlNjQ=';

// returns user & password or false if malformed
parseBasic(header);
// => { user: 'decoded', password: 'base64' }

// returns token or false if malformed
var parseToken = auth.parseHeader('token');
parseToken('Bearer foo.bar.token');
// => foo.bar.token
```
