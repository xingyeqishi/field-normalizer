# Field Normalizer

A tiny lib for object field's normalization [![Build Status](https://travis-ci.org/caio-ribeiro-pereira/field-normalizer.svg?branch=master)](https://travis-ci.org/caio-ribeiro-pereira/field-normalizer)

## About

This is a tiny lib **(~6kb size)** compatible with Node.js v12+, useful to format the name of all keys in a object, you can transform all keys to lowerCase, upperCase, camelCase, pascalCase, constantCase and snakeCase.


### How to install

```
npm install --save field-normalizer
```

### How to use

``` javascript
const FNZ = require('field-normalizer');

const exampleObj = {
  fullName: 'John Connor',
  contactEmail: 'john.connor@sky.net',
  phoneNumber: '+05533334444',
};

// Transforms all object fields to lower case.
FNZ.toLowerCase(exampleObj);
/*
{
  fullname: 'John Connor',
  contactemail: 'john.connor@sky.net',
  phonenumber: '+05533334444',
}
*/

// Transforms all object fields to upper case.
FNZ.toUpperCase(exampleObj);
/*
{
  FULLNAME: 'John Connor',
  CONTACTEMAIL: 'john.connor@sky.net',
  PHONENUMBER: '+05533334444',
}
*/

// Transforms all object fields to camel case.
FNZ.toCamelCase(exampleObj);
/*
{
  fullName: 'John Connor',
  contactEmail: 'john.connor@sky.net',
  phoneNumber: '+05533334444',
}
*/

// Transforms all object fields to pascal case.
FNZ.toPascalCase(exampleObj);
/*
{
  FullName: 'John Connor',
  ContactEmail: 'john.connor@sky.net',
  PhoneNumber: '+05533334444',
}
*/

// Transforms all object fields to constant case.
FNZ.toConstantCase(exampleObj);
/*
{
  FULL_NAME: 'John Connor',
  CONTACT_EMAIL: 'john.connor@sky.net',
  PHONE_NUMBER: '+05533334444',
}
*/

// Transforms all object fields to snake case.
FNZ.toSnakeCase(exampleObj);
/*
{
  full_name: 'John Connor',
  contact_email: 'john.connor@sky.net',
  phone_number: '+05533334444',
}
*/
```

## Author

Caio Ribeiro Pereira <caio.ribeiro.pereira@gmail.com>

Twitter: <https://twitter.com/crp_underground>

About me: <https://crpwebdev.github.io>

## License

The MIT License (MIT)

Copyright (c) 2020 caio.ribeiro.pereira@gmail.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
