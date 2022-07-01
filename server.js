import http from 'http';

const port = 4000;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Hello from server!');
    res.end();
  }
});

server.on('connection', (stream) => {
  console.log('Some one connected!');
});

server.listen(port);

console.log(`Server listen on http://localhost:${port}`);
