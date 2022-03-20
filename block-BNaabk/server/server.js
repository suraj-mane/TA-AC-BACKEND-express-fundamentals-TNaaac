let express = require('express');

let add = express();

add.get('/', (req,res) =>{
  res.send("Welcome");
})


add.listen(3000, () => {
  console.log("server run on port 3k");
})