require('dotenv').config()

module.exports = {
  dbUri: process.env.DB_URI,
  port: process.env.PORT || 3001
}
