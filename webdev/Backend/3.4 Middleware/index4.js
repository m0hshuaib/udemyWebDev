import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express();
const port = 3000;
var bandName = "";

app.use(bodyParser.urlencoded({ extended: true}));
app.use(createBandName);


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  res.send(`<h1>Your Band Name Is:</h1><h2>${bandName}</h2>`);
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

function createBandName(req, res, next) {
  bandName = `${req.body.street}${req.body.pet}✌️`;
  next();
}
