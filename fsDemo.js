// import fs from 'fs';
import fs from 'fs/promises';

// // readFile() - callback 
// // takes in file location, encoding, callback function (async)
// // callback runs after file is read
// fs.readFile('./test.txt', 'utf-8', (err, data) => {
//   if (err) throw err;
//   console.log(data); 
// });


// // readFileSync() - synchronous 
// const data = fs.readFileSync('./test.txt', 'utf-8');
// console.log(data);


// // readFile() - promise .then()
// fs.readFile('./test.txt', 'utf-8')
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// readFile() - async/await
const readFile = async () => {
  try {
    const data = await fs.readFile('./test.txt', 'utf-8');
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

// writeFile()
// overwrites the file if it exists, creates a new file if it doesn't
const writeFile = async () => {
  try {
    await fs.writeFile('./test.txt', 'hello, im writing to this file');
    console.log('file written to...');
  } catch (error) {
    console.error(error);
  }
}

// appendFile()
const appendFile = async () => {
  try {
    await fs.appendFile('./test.txt', '\nthis is appended text');
    console.log('file appended to...');
  } catch (error) {
    console.error(error)
  }
}


writeFile();
appendFile();
readFile();