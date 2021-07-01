const express = require("express");
const response = require("../network/response");
const Chat = require("../models/chat");
const router = express.Router();

router.get("/", (req, res) => {
  Chat.find()
    .then((data) => response.success(req, res, data, 200))
    .catch((error) =>
      response.error(req, res, "Error al traer usuario", 500, error)
    );
});

router.get("/:id", (req, res) => {
  Chat.findOne({ _id: req.params.id })
    .populate("users")
    .then((data) => response.success(req, res, data, 200))
    .catch((error) =>
      response.error(req, res, "Error al traer usuario", 500, error)
    );
});

router.post("/", (req, res) => {
  const newChat = new Chat({
    users: req.body.users,
  });
  newChat
    .save()
    .then((data) => response.success(req, res, "Nuevo chat creado", 200))
    .catch((error) =>
      response.error(req, res, "Error al crear chat", 500, error)
    );
});

module.exports = router;
