const express=require('express');
const app =express(); 
const router=require("./routes/route");
var bodyParser = require('body-parser');
const mongoos= require('mongoose');

  

 
app .use(bodyParser.json());

app.use('/information',router);
mongoos.connect('mongodb+srv://ahmed1:1huVrvhuoY8acnoI@cluster0.snwrnod.mongodb.net/?retryWrites=true&w=majority',()=>{
    console .log('connected with Mongo successfully');

    app.listen(process.env.PORT||1110,()=>{
        console.log('created successfully');
        });
})

