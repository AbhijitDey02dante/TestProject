const fs=require('fs');

const express = require('express');
const body=require('body-parser');


const router=express.Router();
const data=[];

router.use(body.urlencoded({extended:false}));
router.get('/login',(req,res,next)=>{
    res.send(`<h1>Username</h1>
    <form onsubmit=localStorage.setItem('username',document.getElementById("username").value) action="/" method="GET">
    <input type="text" id="username" name="username">
    <button type="submit">Send</button>
    </form>`);
});

router.get('/',(req,res,next)=>{
    res.send(`<h1>Message</h1>
    <form onsubmit=document.getElementById("username").value=localStorage.getItem("username") action="/" method="POST">
    <input type="text" id="message" name="message">
    <input type="hidden" id="username" name="username">
    <button type="submit">Send</button>
    </form>`)
});

router.post('/',(req,res,next)=>{
    data.push(`${req.body.username}:${req.body.message}`);
    console.log(data);
    res.redirect('/');
});

module.exports=router;