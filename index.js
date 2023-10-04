const express = require('express');
const employeeRoute=require('./routes/Employee/index');
const authenticationRoute=require('./routes/Autentication')
const auth=require('./controllers/Autentication')
const mongoose=require('mongoose');
const app=express();

mongoose.connect('mongodb+srv://Yeabsra:jXLJ23zGrTq1wfVJ@cluster0.hnucdnm.mongodb.net/?retryWrites=true&w=majority')

app.get('/createEmployee',(req,res)=>{res.send('hello')});
app.post('/adminRegister',auth.adminRegister);
app.use(express.json());


app.listen(3000,()=>{
    console.log('server on port 3000')
})