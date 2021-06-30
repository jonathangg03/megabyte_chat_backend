const express = require("express");
const cors = require("cors");
const path = require("path");
const user = require("./routes/user");
const message = require("./routes/message");
const chat = require("./routes/chat");

const app = express();

app.set("PORT", process.env.API_PORT || 3000);

app.use(cors());
app.use(express.json());
app.use("/user", user);
app.use("/message", message);
app.use("/chat", chat);

app.listen(app.get("PORT"), () =>
  console.log(`Server on port ${app.get("PORT")}`)
);
