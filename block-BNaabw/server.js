var express = require("express");
var logger = require("morgan");
var cookise = require("cookie-parser");
let app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(__dirname + "/public/"))
app.use(logger('dev'));
app.use(cookise());

app.get('/', (req,res) => {
  res.sendFile(__dirname + "/index.html");
})
app.get('/p', (req,res) => {
  res.sendFile(__dirname + "/projects.html");
})
app.get('/users', (req,res) => {
  res.send("users");
});

app.use((req,res, next) => {
  res.send("page is not found 404");
})
app.listen(4000, () => {
  console.log("server is run on port 4k");
})