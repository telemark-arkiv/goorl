'use strict'

const https = require('https')

module.exports = (input, callback) => {
  const postData = JSON.stringify({
    'longUrl': decodeURIComponent(input.url)
  })

  const options = {
    hostname: 'www.googleapis.com',
    port: 443,
    path: `/urlshortener/v1/url?key=${input.key}`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(postData)
    }
  }

  var req = https.request(options, (res) => {
    var body = ''
    res.setEncoding('utf8')
    res.on('data', (chunk) => {
      body += chunk
    })

    res.on('end', () => {
      const json = JSON.parse(body)
      if (json.error) {
        return callback(new Error(JSON.stringify(json.error)), null)
      } else {
        return callback(null, json.id)
      }
    })

    res.on('error', error => {
      return callback(error, null)
    })
  })

  req.on('error', error => {
    return callback(error, null)
  })

  req.write(postData)
  req.end()
}
