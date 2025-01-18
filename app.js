

const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const data = { message: 'Hello, World!' };
    res.end(JSON.stringify(data));  // Send JSON response
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
