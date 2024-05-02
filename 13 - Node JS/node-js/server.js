// import the http module
const http = require('http');

// define the hostname and port
const hostname = '127.0.0.1';
const port = 3000;

// create an http server
const server = http.createServer((req, res) => {
  // set response header with a 200 status
  res.writeHead(200, { 'Content-type': 'text/plain' });

  // send the response body
  res.end("Hello, World");
});

// listen on the specified hostname and port
server.listen(port, hostname, () => {
  console.log(`Server running at http:${hostname}:${port}`);
});