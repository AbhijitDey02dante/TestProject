const fs=require('fs');

const routeHandler=(req,res)=>{
    res.setHeader('Content-type','text/html');
    const url=req.url;
    const method=req.method;
    if(url==='/'){
        let message='';
        try{
            message=fs.readFileSync('message.txt');
        }
        catch{
            message='';
        }
        res.write('<html>');
        res.write('<head><title>Enter Data</title></head>');
        res.write('<body>');
        res.write(`<p>${message}</p>`);
        res.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">SEND</button></form>')
        res.write('</body>');
    }
    if(url==='/message' && method==='POST'){
        const body=[];
        req.on('data',(chunk)=>{
            body.push(chunk);
        })
        req.on('end',()=>{
            const parsedBody=Buffer.concat(body).toString();
            const message=parsedBody.split('=')[1];
            fs.writeFileSync('message.txt',message);
        })

        res.statusCode=302;
        res.setHeader('Location','/');
    }
    res.write('</html>');
    res.end();
};
// module.exports=routeHandler;
// module.exports={
//     handler: routeHandler,
//     randomString: "random text"
// }

// module.exports.handler=routeHandler;
// module.exports.randomString="random text";

exports.handler=routeHandler;
exports.randomString="random text";