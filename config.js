const dotenv = require('dotenv')

const env = dotenv.config().parsed

const envKeys = Object.keys(env).reduce((prev, next) => {
  // eslint-disable-next-line no-param-reassign
  prev[`process.env.${next}`] = JSON.stringify(env[next])
  return prev
}, {})

module.exports = envKeys
