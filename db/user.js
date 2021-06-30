const mongoose = require('mongoose')
require('dotenv').config()
mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.ti1oz.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`, {
  
})

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
})

module.exports = mongoose.model('user', userSchema)