const express = require('express')
const moment = require('moment')
const response = require('../network/response')
const Message = require('../models/message')
const router = express.Router()

router.get('/', (req, res) => {
  Message.find()
    .then((data) => response.success(req, res, data, 200))
    .catch((error) =>
      response.error(req, res, 'Error al traer chat', 500, error)
    )
})

router.get('/:chatId', (req, res) => {
  Message.find({ chat: req.params.chatId })
    .then((data) => response.success(req, res, data, 200))
    .catch((error) =>
      response.error(req, res, 'Error al traer chat', 500, error)
    )
})

router.post('/', (req, res) => {
  const newMessage = new Message({
    user: req.body.user,
    content: req.body.content,
    date: moment().format('MMMM Do YYYY, h:mm:ss a'),
    chat: req.body.chat
  })

  newMessage
    .save()
    .then((data) => response.success(req, res, 'Mensaje enviado', 200))
    .catch((error) =>
      response.error(req, res, 'Error al crear chat', 500, error)
    )
})

module.exports = router
