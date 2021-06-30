const express = require("express");
const response = require("../network/response");
const router = express.Router();

router.get("/", (req, res) => {
  response.success(req, res, "Hola mundo", 200);
});

router.get("/:id", (req, res) => {});

router.post("/", (req, res) => {});
module.exports = router;
