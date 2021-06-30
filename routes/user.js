const express = require("express");
const response = require("../network/response");
const User = require("../models/user");
const router = express.Router();

router.get("/", (req, res) => {
  User.find()
    .then((data) => response.success(req, res, data, 200))
    .catch((error) =>
      response.error(req, res, "Error al traer usuario", 500, error)
    );
});

router.get("/:id", (req, res) => {
  User.findById(req.params.id)
    .then((data) => response.success(req, res, data, 200))
    .catch((error) =>
      response.error(req, res, "Error al traer usuario", 500, error)
    );
});

router.post("/", (req, res) => {
  const newUser = new User({
    name: req.body.name,
    phone: req.body.phone,
  });
  newUser
    .save()
    .then((data) => response.success(req, res, "Nuevo usuario creado", 200))
    .catch((error) =>
      response.error(req, res, "Error al crear usuario", 500, error)
    );
});

module.exports = router;
