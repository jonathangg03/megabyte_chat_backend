const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  user: {
    type: Schema.objectId,
    ref: "user",
  },
  content: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  chat: {
    type: Schema.objectId,
    ref: "chat",
  },
});

module.exports = mongoose.model("message", messageSchema);
