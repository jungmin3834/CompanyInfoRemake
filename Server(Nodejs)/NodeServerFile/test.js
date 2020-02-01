var http = require('http'); 

http.createServer(function (req, res) { 
    res.writeHead(200, {'Content-Type': 'text/planin'});
    res.end('Hello World\n'); }
).listen(3333, '127.0.0.1'); 

console.log('Server running at http://127.0.0.1:3333/');
