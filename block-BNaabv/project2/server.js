var express = require("express");
var logger = require("morgan");
var cookieParser = require('cookie-parser')

var app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(logger('dev'));
app.use(cookieParser());

app.use((req,res,next) => {
  res.cookie("name", "suraj");
  res.send(req.cookies);
})
app.use("/main",(req,res,next) => {
  next("Page not found 404");
})

app.get("/", (req,res) => {
  res.send(`<h2> Welcome to express </h2>`);
});

app.get("/user/:username", (req,res) => {
  var username = req.params.username;
  res.send(`<h2>${username}</h2>`);
});

app.get("/about", (req,res) => {
  res.send(`<h2>My name is qwerty </h2>`)
});

app.post("/json", (req,res) => {
  res.send(req.body);
})

app.post("/form", (req,res) => {
  res.send(req.body);
})
app.use((err,req,res,next) => {
  res.send(err);
})

app.listen(3000, () => {
  console.log("server is run on port 3k");
})