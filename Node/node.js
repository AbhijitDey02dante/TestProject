const http = require('http');

const server=http.createServer((req,res)=>{
    console.log('Abhijit Dey');
})

server.listen(4000);