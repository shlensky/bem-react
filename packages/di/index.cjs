'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./build/di.production.min.cjs')
} else {
  module.exports = require('./build/di.development.cjs')
}
