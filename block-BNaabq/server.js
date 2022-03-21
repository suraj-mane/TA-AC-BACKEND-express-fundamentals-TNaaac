var express = require('express');
var morgan = require('morgan');
var cookieparser = require('cookie-parser'); 



var add = express();

add.use(morgan('dev'));
add.use(cookieparser());
add.use((req,res,next) => {
  console.log(req.cookies);
  res.cookie("username", "suraj");
  next();
})


add.get("/", (req,res) => {
  res.sendFile(__dirname + "/index.html");
})

add.listen(4000, () => {
  console.log("server is run on 4k");
})