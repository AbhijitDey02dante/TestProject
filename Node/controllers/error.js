const path=require('path');

const dirPath = require('../util/path.js');

exports.error = (req,res,next)=>{
    res.status(404).sendFile(path.join(dirPath,'views','error404.html'));
}