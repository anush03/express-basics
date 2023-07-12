const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("./clock"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./clock/index.html"));
  console.log(req.url);
});

app.listen(5000, () => {
  console.log("Listening on Port 5000");
});
