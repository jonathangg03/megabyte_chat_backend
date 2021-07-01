const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const messageSchema = new Schema({
  users: [
    {
      type: Schema.ObjectId,
      ref: "user",
    },
  ],
});

module.exports = mongoose.model("message", messageSchema);
