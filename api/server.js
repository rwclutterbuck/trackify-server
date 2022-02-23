const express = require("express");
const app = express();
const cors = require("cors");
const habits = require("./routes/habits");
const auth = require("./routes/auth");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello world").status(200);
});

app.use("/habits", habits);

app.use("/auth", auth);

module.exports = app;
