const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const chatSchema = new Schema({
  users: [
    {
      type: Schema.ObjectId,
      ref: "user",
    },
  ],
});

module.exports = mongoose.model("chat", chatSchema);
