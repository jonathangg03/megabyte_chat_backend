const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.set("PORT", process.env.API_PORT || 3000);

app.use(cors());
app.use(express.json());
app.use("/user", path.join(__dirname, "routes/user"));
app.use("/message", path.join(__dirname, "routes/message"));
app.use("/chat", path.join(__dirname, "routes/chat"));

app.listen(app.get("PORT"), () =>
  console.log(`Server on port ${app.get("PORT")}`)
);
