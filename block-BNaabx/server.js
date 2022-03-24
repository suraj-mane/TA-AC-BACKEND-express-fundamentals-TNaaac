var express = require("express");
var path = require("path");

let app = express();

app.use((req,res) => {
  console.log(req.url,req.method, Date.now());
});

app.use("/index", (req,res) => {
  if(req.headers["content-type"] === "json"){
    console.log(req.body);
  }
})
var path = __dirname;
app.listen(3000, () => {
  console.log('server is run on port 3k');
})