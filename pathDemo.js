import path from 'path';
import url from 'url';

// path module gives us methods to work with file and directory paths

const filePath = './dir1/dir2/test.txt';


// basename() - returns the last portion of a path
console.log(path.basename(filePath));

// dirname() - returns the directory name of a path
console.log(path.dirname(filePath));

// extname() - returns the extension of a path
console.log(path.extname(filePath));

// parse() - returns an object with the root, dir, base, ext, and name of a path
console.log(path.parse(filePath));

// import.meta.url - file URL (file:// ...)
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__filename);
console.log(__dirname);

// join() - creates a file path based on arguments passed in
const filePath2 = path.join(__dirname, 'dir1', 'dir2', 'test.txt');
console.log(filePath2);

// resolve() - absolute path
const filePath3 = path.resolve(__dirname, 'dir1', 'dir2', 'test.txt');
console.log(filePath3);