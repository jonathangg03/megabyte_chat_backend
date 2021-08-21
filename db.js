const mongoose = require('mongoose')
require('dotenv').config()
const connect = () => {
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => console.log('DB Connected'))
}

module.exports = connect
