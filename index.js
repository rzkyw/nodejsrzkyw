const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const queryObject = url.parse(req.url, true).query;
  const radius = queryObject.radius;

  if (radius === undefined) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'text/plain');
    res.end('error: masukkan nilai radius parameter.\n');
  } else {
    const area = Math.PI * radius ** 2;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`luas lingkaran dengan radius ${radius} yaitu ${area}.\n`);
  }
});

console.log('Nama: Muhamad Rizky Herlambang Walangadi\nNIM:210211060060\nTIK1032-F')

server.listen(4000, () => {
  console.log('Server running at http://localhost:4000/?radius=5');
});