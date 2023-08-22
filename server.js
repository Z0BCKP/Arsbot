require("dotenv")
const cookie = (process.env.RBXCOOKIE)

const express = require("express");
const rbx = require("noblox.js");
const app = express()

app.use(express.static("public"));

async function startApp() {
  await rbx.setCookie(cookie);
  let currentUser = await rbx.getCurrentUser();
  console.log(currentUser.UserName);
}
startApp();

app.get("/demote", (req, res) => {
    var ID = req.param("group");
    var User = req.param("user");
  
    rbx.demote(parseInt(ID), parseInt(User));
    res.json("Demoted!");
});

app.get("/promote", (req, res) => {
    var ID = req.param("group");
    var User = req.param("user");
  
    rbx.demote(parseInt(ID), parseInt(User));
    res.json("Promoted!");
});

app.get("/shout", (req, res) => {
    var ID = req.param("group");
    var User = req.param("message");
  
    rbx.demote(parseInt(ID), parseInt(User));
    res.json("Shout Message!");
});

const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});