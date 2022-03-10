const http = require("http");
const express = require("express");
const app = express();

//! Creating NodeServer.
http
  .createServer((req, res) => {
    res.write("Node Server");
    res.end();
  })
  .listen(4004);

//! Creating ExpressServer.
app.get("/api", (req, res) => {
  const user = { name: "ManiKumar" };
  res.send(user);
  res.send("<h1>hii</h1>");
  res.send("hello");
});

app.listen(8000, (req, res) => {
  console.log("Application is started working.");
});
