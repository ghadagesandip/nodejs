const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('content-type', 'text/html');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('ok');
});
server.listen(8000,'10.0.11.98',()=>{
    console.log('listening on 10.0.11.98:8000')
});
