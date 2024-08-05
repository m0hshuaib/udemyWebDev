/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import { input } from '@inquirer/prompts';

const answer = await input({ message: 'Enter a URL: ' });
console.log(answer);

// 2

//const fs = require("fs");
import  fs from 'fs';

fs.writeFile("URL.txt", answer, (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
})

//3

// var qr = require('qr-image');
import qr from "qr-image";
 
var qr_svg = qr.image(answer, { type: 'png' });
qr_svg.pipe(fs.createWriteStream('qrImg.png'));
 
var svg_string = qr.imageSync(answer, { type: 'png' });