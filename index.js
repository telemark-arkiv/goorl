'use strict'

const getShortenedUrl = require('./lib/get-shortened-url')

module.exports = (options, callback) => {
  if (!options) {
    return callback(new Error('Missing required input'), null)
  }
  if (!options.url) {
    return callback(new Error('Missing required input: options.url'))
  }

  if (!options.key) {
    return callback(new Error('Missing required input: options.key'))
  }

  getShortenedUrl(options, (error, url) => {
    if (error) {
      return callback(error, null)
    } else {
      return callback(null, url)
    }
  })
}
