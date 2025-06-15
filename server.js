import http from 'http';
import fs from 'fs/promises';
import url from 'url';
import path from 'path';
const PORT = process.env.PORT;


// get current path
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// takes in a request and a response
// sends some text to the client (browser)
const server = http.createServer(async (req, res) => {
  // takes in:
  // what u wanna change (Content-Type)
  // the type u want (text/html)
  // res.setHeader('Content-Type', 'text/html')

  // res.statusCode = 404; // sets the status code

  // console.log(req.url); // /, /about, etc
  // console.log(req.method); // GET, POST, etc

  // simple router
  
  try {
    // check if GET request
    if (req.method === 'GET') {
      let filePath;
      if (req.url === '/') {
        filePath = path.join(__dirname, 'public', 'index.html');
      } else if (req.url === '/about') {
        filePath = path.join(__dirname, 'public', 'about.html');
      } else {
        throw new Error('Not Found');
      }

      const data = await fs.readFile(filePath);
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);

    } else {
      throw new Error('Method not allowed');
    }

  } catch (error) {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Server error');
  }
});

// have to listen on a port
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
});