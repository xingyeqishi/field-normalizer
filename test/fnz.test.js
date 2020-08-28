/* global test, expect */
const fnz = require('../index');

const camelCaseObj = {
  fullName: 'John Connor',
  contactEmail: 'john.connor@sky.net',
  phoneNumber: '+05533334444',
};

const pascalCaseObj = {
  FullName: 'John Connor',
  ContactEmail: 'john.connor@sky.net',
  PhoneNumber: '+05533334444',
};

const constantCaseObj = {
  FULL_NAME: 'John Connor',
  CONTACT_EMAIL: 'john.connor@sky.net',
  PHONE_NUMBER: '+05533334444',
};

const snakeCaseObj = {
  full_name: 'John Connor',
  contact_email: 'john.connor@sky.net',
  phone_number: '+05533334444',
};

test('transforms camel case object keys to lower case', () => {
  const expected = ['fullname', 'contactemail', 'phonenumber'];
  expect(Object.keys(fnz.toLowerCase(camelCaseObj))).toEqual(expected);
});

test('transforms pascal case object keys to lower case', () => {
  const expected = ['fullname', 'contactemail', 'phonenumber'];
  expect(Object.keys(fnz.toLowerCase(pascalCaseObj))).toEqual(expected);
});

test('transforms constant case object keys to lower case', () => {
  const expected = ['full_name', 'contact_email', 'phone_number'];
  expect(Object.keys(fnz.toLowerCase(constantCaseObj))).toEqual(expected);
});

test('transforms snake case object keys to lower case', () => {
  const expected = ['full_name', 'contact_email', 'phone_number'];
  expect(Object.keys(fnz.toLowerCase(snakeCaseObj))).toEqual(expected);
});

test('transforms camel case object keys to upper case', () => {
  const expected = ['FULLNAME', 'CONTACTEMAIL', 'PHONENUMBER'];
  expect(Object.keys(fnz.toUpperCase(camelCaseObj))).toEqual(expected);
});

test('transforms pascal case object keys to upper case', () => {
  const expected = ['FULLNAME', 'CONTACTEMAIL', 'PHONENUMBER'];
  expect(Object.keys(fnz.toUpperCase(pascalCaseObj))).toEqual(expected);
});

test('transforms constant case object keys to upper case', () => {
  const expected = ['FULL_NAME', 'CONTACT_EMAIL', 'PHONE_NUMBER'];
  expect(Object.keys(fnz.toUpperCase(constantCaseObj))).toEqual(expected);
});

test('transforms snake case object keys to upper case', () => {
  const expected = ['FULL_NAME', 'CONTACT_EMAIL', 'PHONE_NUMBER'];
  expect(Object.keys(fnz.toUpperCase(snakeCaseObj))).toEqual(expected);
});

test('transforms camel case object keys to camel case', () => {
  const expected = ['fullName', 'contactEmail', 'phoneNumber'];
  expect(Object.keys(fnz.toCamelCase(camelCaseObj))).toEqual(expected);
});

test('transforms pascal case object keys to camel case', () => {
  const expected = ['fullName', 'contactEmail', 'phoneNumber'];
  expect(Object.keys(fnz.toCamelCase(pascalCaseObj))).toEqual(expected);
});

test('transforms constant case object keys to camel case', () => {
  const expected = ['fullName', 'contactEmail', 'phoneNumber'];
  expect(Object.keys(fnz.toCamelCase(constantCaseObj))).toEqual(expected);
});

test('transforms snake case object keys to camel case', () => {
  const expected = ['fullName', 'contactEmail', 'phoneNumber'];
  expect(Object.keys(fnz.toCamelCase(snakeCaseObj))).toEqual(expected);
});

test('transforms camel case object keys to pascal case', () => {
  const expected = ['FullName', 'ContactEmail', 'PhoneNumber'];
  expect(Object.keys(fnz.toPascalCase(camelCaseObj))).toEqual(expected);
});

test('transforms pascal case object keys to pascal case', () => {
  const expected = ['FullName', 'ContactEmail', 'PhoneNumber'];
  expect(Object.keys(fnz.toPascalCase(pascalCaseObj))).toEqual(expected);
});

test('transforms constant case object keys to pascal case', () => {
  const expected = ['FullName', 'ContactEmail', 'PhoneNumber'];
  expect(Object.keys(fnz.toPascalCase(constantCaseObj))).toEqual(expected);
});

test('transforms snake case object keys to pascal case', () => {
  const expected = ['FullName', 'ContactEmail', 'PhoneNumber'];
  expect(Object.keys(fnz.toPascalCase(snakeCaseObj))).toEqual(expected);
});

test('transforms camel case object keys to snake case', () => {
  const expected = ['full_name', 'contact_email', 'phone_number'];
  expect(Object.keys(fnz.toSnakeCase(camelCaseObj))).toEqual(expected);
});

test('transforms pascal case object keys to snake case', () => {
  const expected = ['full_name', 'contact_email', 'phone_number'];
  expect(Object.keys(fnz.toSnakeCase(pascalCaseObj))).toEqual(expected);
});

test('transforms constant case object keys to snake case', () => {
  const expected = ['full_name', 'contact_email', 'phone_number'];
  expect(Object.keys(fnz.toSnakeCase(constantCaseObj))).toEqual(expected);
});

test('transforms snake case object keys to snake case', () => {
  const expected = ['full_name', 'contact_email', 'phone_number'];
  expect(Object.keys(fnz.toSnakeCase(snakeCaseObj))).toEqual(expected);
});

test('transforms camel case object keys to constant case', () => {
  const expected = ['FULL_NAME', 'CONTACT_EMAIL', 'PHONE_NUMBER'];
  expect(Object.keys(fnz.toConstantCase(camelCaseObj))).toEqual(expected);
});

test('transforms pascal case object keys to constant case', () => {
  const expected = ['FULL_NAME', 'CONTACT_EMAIL', 'PHONE_NUMBER'];
  expect(Object.keys(fnz.toConstantCase(pascalCaseObj))).toEqual(expected);
});

test('transforms constant case object keys to constant case', () => {
  const expected = ['FULL_NAME', 'CONTACT_EMAIL', 'PHONE_NUMBER'];
  expect(Object.keys(fnz.toConstantCase(constantCaseObj))).toEqual(expected);
});

test('transforms snake case object keys to constant case', () => {
  const expected = ['FULL_NAME', 'CONTACT_EMAIL', 'PHONE_NUMBER'];
  expect(Object.keys(fnz.toConstantCase(snakeCaseObj))).toEqual(expected);
});
