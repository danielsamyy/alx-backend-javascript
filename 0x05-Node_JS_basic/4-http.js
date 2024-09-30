const http = require('http');

const server = http.createServer((request, response) => {
  // Use clear variable names for readability
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end('Hello Holberton School!');
});

const port = 1245;
server.listen(port, () => {});
module.exports = server;
