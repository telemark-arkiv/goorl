[![Build Status](https://travis-ci.org/telemark/goorl.svg?branch=master)](https://travis-ci.org/telemark/goorl)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![Greenkeeper badge](https://badges.greenkeeper.io/telemark/goorl.svg)](https://greenkeeper.io/)

# goorl

Shortens url with goo.gl

## Installation

From npm

```sh
$ npm i goorl
```

## Usage

Required inputs

**key** Your google API key

**url** The URL you want to shorten

### Promises

```javascript
const goorl = require('goorl')
const options = {
  key: 'your-google-api-key',
  url: 'http://www.telemark.no/Planer/Regional-planstrategi/Offentlig-ettersyn-ny-regional-planstrategi'
}

goorl(options)
  .then(url => console.log(url))
  .catch(error => console.error(error))
```

### Callbacks

```javascript
const goorl = require('goorl')
const options = {
  key: 'your-google-api-key',
  url: 'http://www.telemark.no/Planer/Regional-planstrategi/Offentlig-ettersyn-ny-regional-planstrategi'
}

goorl(options, (error, url) => {
  if (error) {
    console.error(error)
  } else {
    console.log(url)
  }
})
```

## License

[MIT](LICENSE)

![Robohash image of goorl](https://robots.kebabstudios.party/goorl.png "Robohash image of goorl")