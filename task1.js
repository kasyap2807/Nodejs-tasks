var http = require('http');
// var module = require('./first_module.js');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('hello,World!');
    res.end();
}).listen(2101);