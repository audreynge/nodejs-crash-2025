import url from 'url';

const urlString = 'https://www.google.com/search?q=hello+world';

// URL object
const urlObj = new URL(urlString);
console.log(urlObj);

// format() - converts URL object to string
console.log(url.format(urlObj));

// import.meta.url - file URL (file:// ...)
console.log(import.meta.url);

// fileURLToPath() - convert file URL to path
console.log(url.fileURLToPath(import.meta.url));


console.log(urlObj.search);
const params = new URLSearchParams(urlObj.search);
console.log(params.get('q')); // get query parameter value
params.append('limit', '5'); // add new query parameter
params.delete('limit'); // delete query parameter
console.log(params);