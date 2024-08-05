import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
// Import the dirname function from the path module
import { dirname } from "path";

// Import the fileURLToPath function from the url module
import { fileURLToPath } from "url";

// Convert the current module's URL to a file path and get the directory name
const __dirname = dirname(fileURLToPath(import.meta.url));

// Explanation:
// 1. import.meta.url provides the URL of the current module.
// 2. fileURLToPath(import.meta.url) converts this URL to a file path.
// 3. dirname(...) then gets the directory name of this file path.
// This is useful in ES modules where __dirname is not natively available as it is in CommonJS.


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  console.log(req.body);
  res.sendStatus(201);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
