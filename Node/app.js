const express=require('express');

const app=express();

app.use((req,res,next)=>{
    console.log("Inside middleware");
    next(); // Allows request to pass to next middleware in line
});

app.use((req,res,next)=>{
    console.log("Inside next middleware");
    res.send('<h1>Express Header</h1>');
});

app.listen(4000);