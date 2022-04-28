const path=require('path');

const dirPath = require('../util/path.js');

exports.getProducts = (req,res,next)=>{
    res.sendFile(path.join(dirPath,'views','add-product.html'));
    // res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="text" name="size"><button type="submit">ADD</button></form>');
}

exports.contactus = (req,res,next)=>{
    res.sendFile(path.join(dirPath,'views','contactus.html'));
}

exports.success=(req,res,next)=>{
    res.sendFile(path.join(dirPath,'views','success.html'));
}

exports.postProducts = (req,res,next)=>{
    console.log(req.body);
    res.redirect('/add-product');
}

exports.showProduct=(req,res,next)=>{
    res.sendFile(path.join(dirPath,'views','shop.html'));
    // res.send('<h1>Main Body</h1>');
    // next(); // Allows request to pass to next middleware in line
}
