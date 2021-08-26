const express = require('express')
const cors = require('cors')
const user = require('./routes/user')
const message = require('./routes/message')
const chat = require('./routes/chat')
const connectDB = require('./db')
const { port } = require('./config')
const app = express()

connectDB()

app.set('PORT', port)

app.use(cors())
app.use(express.json())
app.use('/user', user)
app.use('/message', message)
app.use('/chat', chat)

app.listen(app.get('PORT'), () =>
  console.log(`Server on port ${app.get('PORT')}`)
)
