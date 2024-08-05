import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  var numOfCharsInName = numberOfCharsInName(req);
  res.render("index.ejs", {numberOfLetters: numOfCharsInName});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

function numberOfCharsInName(req){
  var fullName = req.body;
  var combinedNames = fullName.fName + fullName.lName;
  return combinedNames.length;
}
