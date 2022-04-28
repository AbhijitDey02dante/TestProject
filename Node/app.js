const path=require('path');

const express=require('express');
const bodyParser=require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const app=express();


app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({extended:false}));

app.use(adminRoutes);
app.use(shopRoutes);
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','error404.html'));
})

app.listen(3000);


//admin.js
// const express=require('express');

// const router=express.Router();


// router.get('/add-product',(req,res,next)=>{
//     res.send('<form action="/admin/product" method="POST"><input type="text" name="title"><input type="text" name="size"><button type="submit">ADD</button></form>');
// });
// router.post('/product',(req,res,next)=>{
//     console.log(req.body);
//     res.redirect('/admin/add-product');
// });

// module.exports = router;


//shop.js
// const express=require('express');

// const router=express.Router();

// router.get('/',(req,res,next)=>{
//     res.send('<h1>Main Body</h1>');
//     // next(); // Allows request to pass to next middleware in line
// });

// module.exports=router;
