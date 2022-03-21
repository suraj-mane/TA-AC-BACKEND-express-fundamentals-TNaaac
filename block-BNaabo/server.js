let express = require('express');


let app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false}));

app.use(express.static(__dirname + '/public'));

app.use("/", (req,res,next) => {
  console.log(req.method,req.url);
  next();
});

app.get("/", (req,res) => {
  res.sendFile(__dirname + '/index.html');
})

app.post("/", (req,res) => {
  console.log(req.body);
})

app.listen(4000, () => {
  console.log("server run on port 4000");
});