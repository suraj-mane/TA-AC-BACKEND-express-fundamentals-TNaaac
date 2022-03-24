var express = require("express");

let app = express();

app.use((req,res) => {
  console.log(req.url,req.method, Date.now());
});

app.use("/index", (req,res) => {
  if(req.headers["content-type"] === "json"){
    console.log(req.body);
  }
})

app.listen(3000, () => {
  console.log('server is run on port 3k');
})