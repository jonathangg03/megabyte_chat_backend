const mongoose = require('mongoose')
const { dbUri } = require('./config')

const connect = () => {
  mongoose
    .connect(dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => console.log('DB Connected'))
}

module.exports = connect
