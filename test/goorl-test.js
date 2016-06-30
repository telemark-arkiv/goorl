'use strict'

const tap = require('tap')
const goorl = require('../index')

tap.test('Requires options to be specified', function (test) {
  const options = false
  const expectedErrorMessage = 'Missing required input'
  goorl(options, (error, data) => {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('Requires options.url to be specified', function (test) {
  const options = {
    url: false
  }
  const expectedErrorMessage = 'Missing required input: options.url'
  goorl(options, (error, data) => {
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
  goorl(options, (error, data) => {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})
