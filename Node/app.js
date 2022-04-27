const http = require('http');
const routeHandler=require('./routes.js');
console.log(routeHandler.randomString);
const server=http.createServer(routeHandler.handler);

server.listen(4000);