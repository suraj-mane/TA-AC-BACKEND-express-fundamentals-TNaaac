var express = require('express');

let app =  express();

app.use(express.json());

app.get("/", (req,res) => {
  res.sendFile(__dirname + "/index.html");
  var username = req.params.username;
});

app.get("/new", (req,res) => {
  res.sendFile(__dirname + "/new.html");
})
app.post("/new", (req,res) => {
  console.log(req.body);
})
app.get("/users/:username", (req,res) => {
  var username = req.params.username;
  console.log(username);
});

app.listen(4000, () => {
  console.log("server is run on port 4k");
})