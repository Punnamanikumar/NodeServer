const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  const user = { name: "ManiKumar" };
  res.send(user);
  res.send("<h1>hii</h1>");
  res.send("hello");
});

app.listen(8000, (req, res) => {
  console.log("Application is started working.");
});
