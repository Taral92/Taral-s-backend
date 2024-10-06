const express = require('express');
const taral=express();
const port=5001
require('dotenv').config()
console.log(process.env)

taral.get('/',(req,res)=>{
    res.send('i am taral')
})
taral.get('/twitter',(req,res)=>{
      res.send('taralcom')
})
taral.get('/login',(req,res)=>{
    res.send('<h1>hello guys plz login</h1>')
})
taral.listen(process.env.PORT,()=>{
    console.log(`server is listening on this ${port}`);
})