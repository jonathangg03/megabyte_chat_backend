const mongoose = require('mongoose')
require('dotenv').config()
mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.ti1oz.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`, {
  
})

const messageSchema = new Schema({
  users: [
    {

    }
  ],
})

module.exports = mongoose.model('message', messageSchema)