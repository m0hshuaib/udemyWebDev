
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var message = "Hey! It's the weekend, it's time to rest!";
var date = new Date();
var day = date.getDay();


app.use(setMessage);

app.get("/", (req, res) => {
  res.render("index.ejs", {message: message});
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

function setMessage(req, res, next){
    if (!day == 0 || !day == 6) {
        message = "Hey! It's a weekday, it's time to work harder!";
    }
    next();
}