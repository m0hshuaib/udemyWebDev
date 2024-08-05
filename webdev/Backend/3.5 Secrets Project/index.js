//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";
// Import the dirname function from the path module
import { dirname } from "path";

// Import the fileURLToPath function from the url module
import { fileURLToPath } from "url";

// Convert the current module's URL to a file path and get the directory name
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var validPassword = false;


app.use(bodyParser.urlencoded({ extended: true}));
app.use(isValid);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
  console.log(req.body);
  if (validPassword) {
    res.sendFile(__dirname + "/public/secret.html");
    validPassword = false;

  } else {
    res.redirect("/");
  }
  
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

function isValid(req, res, next){
    var password = req.body.password;
    if (password === "Bismillah"){
        validPassword = true;
    }
    next();
}