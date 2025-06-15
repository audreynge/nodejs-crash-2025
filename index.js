import getPosts, { getPostsLength } from './postController.js'; 

// const { generateRandomNumber, celciusToFahrenheit } = require('./utils')

// console.log(`Random number: ${generateRandomNumber()}`);

// console.log(`Celcius to Fahrenheit: ${celciusToFahrenheit(0)}`);

console.log(getPosts());
console.log(`Number of posts: ${getPostsLength()}`);