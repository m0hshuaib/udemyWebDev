// Code to practice using express.js. Starting servers, using nodemon and ...
/*
    1. Configure server to handle multiple endpoints
    2. Practice installing and importing packages
    3. Practice using the -g option to install globally
*/

import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hi</h1>");
    console.log(req.rawHeaders);
});

app.get("/contact", (req, res) => {
    res.send("<h1>Phone: 08033022566</h1>");
    console.log(req.rawHeaders);
});

app.get("/about", (req, res) => {
    res.send("<h1>About Me</h1><p>Hello, My name is Shuaib</p>");
    console.log(req.rawHeaders);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});