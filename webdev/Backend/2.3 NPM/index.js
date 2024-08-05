// var generateName = require("sillyname");
// import generateName from "sillyname";
// var sillyName = generateName();
// console.log(`My name is ${superHeroName}.`);

// import superheroes from "superheroes";

// const name = superheroes.random();
// console.log(`I am ${name}!`);

// (async () => {
//     const superheroes = await import('./node_modules/superheroes/superheroes.json', {
//         assert: { type: 'json' }
//     });
//     console.log(superheroes.default);
// })();


const superheroes = require("superheroes");
// import superheroes from "superheroes";

const name = superheroes.random();
console.log(`I am ${name}!`);