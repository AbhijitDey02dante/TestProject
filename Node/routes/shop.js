const path=require('path');

const express=require('express');

const dirPath=require('../util/path.js');

const router=express.Router();

router.get('/',(req,res,next)=>{
    res.sendFile(path.join(dirPath,'views','shop.html'));
    // res.send('<h1>Main Body</h1>');
    // next(); // Allows request to pass to next middleware in line
});

module.exports=router;