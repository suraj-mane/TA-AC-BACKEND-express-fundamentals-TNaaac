var express = require('express');
const { json } = require('express/lib/response');

let app = express();

app.get('/',(req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get('/about', (req,res) => {
})

app.get((req,res,next) => {
  if (req.url === "admin") {
    return next("Unauthorized");
  }
  next();
})

app.use((req,res,next) => {
  res.send(`<h1>Page is not found 404</h1>`);
});

app.use((err,req,res,next) => {
  res.send(err);
});

app.listen(4000, () => {
  console.log("server is on port 4k");
})