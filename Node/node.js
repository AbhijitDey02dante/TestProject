const http = require('http');

const server=http.createServer((req,res)=>{
    res.setHeader('Content-type','text/html');
    res.write('<html>');
    if(req.url=="/"){
        res.write('<head><title>Welcome</title></head>');
        res.write('<body><h1>Welcome</h1></body>');
    }
    if(req.url=="/home"){
        res.write('<head><title>Welcome home</title></head>');
        res.write('<body><h1>Welcome home</h1></body>');
    }
    if(req.url=="/about"){
        res.write('<head><title>Welcome to About Us page</title></head>');
        res.write('<body><h1>Welcome to About Us page</h1></body>');
    }
    if(req.url=="/node"){
        res.write('<head><title>Welcome to my Node Js project</title></head>');
        res.write('<body><h1>Welcome to my Node Js project</h1></body>');
    }
    res.write('</html>');
    res.end();
})

server.listen(4000);