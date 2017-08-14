'use strict'

const tap = require('tap')
const goorl = require('../../index')

tap.test('Requires options to be specified', function (test) {
  const options = false
  const expectedErrorMessage = 'Missing required input'
  goorl(options)
    .then(data => console.log(data))
    .catch(error => {
      tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
      test.done()
    })
})

tap.test('Requires options.url to be specified', function (test) {
  const options = {
    url: false
  }
  const expectedErrorMessage = 'Missing required input: options.url'
  goorl(options)
    .then(data => console.log(data))
    .catch(error => {
      tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
      test.done()
    })
})

tap.test('Requires options.key to be specified', function (test) {
  const options = {
    url: true,
    key: false
  }
  const expectedErrorMessage = 'Missing required input: options.key'
  goorl(options)
    .then(data => console.log(data))
    .catch(error => {
      tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
      test.done()
    })
})

tap.test('It returns error for wrong key', function (test) {
  const options = {
    url: 'https://www.google.com',
    key: 'thisIsAFakeKey'
  }
  goorl(options)
    .then(data => console.log(data))
    .catch(error => {
      tap.ok(error, 'Error OK')
      test.done()
    })
})

tap.test('It returns expected result', test => {
  const options = {
    url: 'https://www.google.com',
    key: 'AIzaSyAWLMb19MN62IndAlb4gySFetKPL3pRdnA'
  }
  goorl(options).then(data => {
    tap.equal('https://goo.gl/Njku', data, 'Data ok')
    test.done()
  }).catch(error => {
    throw error
  })
})
