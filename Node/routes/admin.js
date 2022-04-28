const path=require('path');

const express=require('express');

const dirPath = require('../util/path.js');

const router=express.Router();

router.get('/add-product',(req,res,next)=>{
    res.sendFile(path.join(dirPath,'views','add-product.html'));
    // res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="text" name="size"><button type="submit">ADD</button></form>');
});

router.get('/contactus',(req,res,next)=>{
    res.sendFile(path.join(dirPath,'views','contactus.html'));
})

router.post('/success',(req,res,next)=>{
    res.sendFile(path.join(dirPath,'views','success.html'));
})

router.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/add-product');
});

module.exports = router;