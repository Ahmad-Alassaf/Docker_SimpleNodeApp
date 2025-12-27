const express=require('express')
const dotenv=require('dotenv').config()
const colors=require('colors')
port=process.env.PORT||4000

const app=express();
app.get('/',(req,res)=>{res.send('<h1> Hello ! </br>Simple Nodejs App mit Docker ! </h1>')})
app.listen(port,()=>console.log(`App running on Port : ${port}`.green.underline))