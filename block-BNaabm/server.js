let exprees = require("express");

let add = exprees();

add.use("/user",(req,res,next) => {
  console.log(req.method);
  next();
})

add.get("/user", (req,res) => {
  res.send("welcome to exprees");
});
add.listen(4000,() => {
  console.log("server run port 4000");
})