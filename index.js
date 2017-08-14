'use strict'

const getShortenedUrl = require('./lib/get-shortened-url')

module.exports = (options, callback) => {
  return new Promise((resolve, reject) => {
    if (!options) {
      const error = new Error('Missing required input')
      return callback ? callback(error, null) : reject(error)
    }
    if (!options.url) {
      const error = new Error('Missing required input: options.url')
      return callback ? callback(error, null) : reject(error)
    }

    if (!options.key) {
      const error = new Error('Missing required input: options.key')
      return callback ? callback(error, null) : reject(error)
    }

    getShortenedUrl(options, (error, url) => {
      if (error) {
        return callback ? callback(error, null) : reject(error)
      } else {
        return callback ? callback(null, url) : resolve(url)
      }
    })
  })
}
