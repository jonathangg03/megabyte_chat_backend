const express = require('express')
const response = require('../network/response')
const Chat = require('../models/chat')
const router = express.Router()

router.get('/:userId', (req, res) => {
  Chat.find()
    .populate('users')
    .then((data) => {
      const chats = data.filter((chat) => {
        if (
          chat.users[0]._id.toString() === req.params.userId ||
          chat.users[1]._id.toString() === req.params.userId
        ) {
          return chat
        }
      })
      response.success(req, res, chats, 200)
    })
    .catch((err) =>
      response.error(req, res, 'Error al traer usuario', 500, err)
    )
})

router.get('/', (req, res) => {
  Chat.find()
    .populate('users')
    .then((data) => response.success(req, res, data, 200))
    .catch((error) =>
      response.error(req, res, 'Error al traer usuario', 500, error)
    )
})

// router.get("/:id", (req, res) => {
//   Chat.find()
//     .populate("users")
//     .then((data) => {
//       const newData = data.filter((chat) => {
//         const newChat = chat.users.filter((user) => {
//           if (user._id.toString() === req.params.id) {
//             return chat;
//           } else {
//             return;
//           }
//         });
//         console.log(newChat);
//         return newChat;
//       });
//       return newData;
//     })
//     .then((data) => {
//       response.success(req, res, data, 200);
//     })
//     .catch((error) =>
//       response.error(req, res, "Error al traer usuario", 500, error)
//     );
// });

router.post('/', (req, res) => {
  const newChat = new Chat({
    users: req.body.users
  })
  newChat
    .save()
    .then((data) => response.success(req, res, 'Nuevo chat creado', 200))
    .catch((error) =>
      response.error(req, res, 'Error al crear chat', 500, error)
    )
})

module.exports = router
