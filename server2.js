import { createServer } from 'http';
const PORT = process.env.PORT;

const users = [
  {id: 1, name:'John Doe'},
  {id: 2, name:'Jane Doe'},
  {id: 3, name:'Jim Doe'},
]

// Logger middlware
// middleware: objects/function that have access to req and res objects
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // says this is done, moves to the next middleware
}

// JSON middlware
const jsonMiddleware = (req, res, next) => {
  res.setHeader('Content-Type', 'applicatoin/json');
  next();
}

// Route handler for GET /api/users
const getUsersHandler = (req, res) => {
  res.writeHead(200);
  res.end(JSON.stringify(users));
}

// Route handler for GET /api/users/:id
const getUserByIdHandler = (req, res) => {
  const id = req.url.split('/')[3];
  const user = users.find((user) => user.id === parseInt(id));
  if (user) {
    res.writeHead(200);
    res.end(JSON.stringify(user));
  } else {
    notFoundHandler(req, res);
  }
}

// Route handler for POST /api/users
const createUserHandler = (req, res) => {
  let body = '';
  // Listen for data
  req.on('data', (chunk) => {
    body += chunk.toString();
  });
  req.on('end', () => {
    const newUser = JSON.parse(body);
    users.push(newUser);
    res.statusCode = 201; // successful created
    res.end(JSON.stringify(newUser));
  })
}

// Not found handler
const notFoundHandler = (req, res) => {
  res.writeHead(404);
  res.end(JSON.stringify({ message: 'Route not found' }));
}

const server = createServer((req, res) => {
  logger(req, res, () => {
    jsonMiddleware(req, res, () => {
      if (req.method === 'GET' && req.url === '/api/users') {
        getUsersHandler(req, res);
      } else if (req.method === 'GET' && req.url.match(/\/api\/users\/([0-9]+)/)) {
        getUserByIdHandler(req, res);
      } else if (req.method === 'POST' && req.url === '/api/users') {
        createUserHandler(req, res);
      } else {
        notFoundHandler(req, res);
      }
    })
  });
})

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
});
