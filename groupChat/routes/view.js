const fs=require('fs');

const express=require('express');

const router=express.Router();

router.get('/view',(req,res,next)=>{
    res.send(`<h1>${fs.readFileSync('message.txt')}</h1>`);
});

module.exports=router;