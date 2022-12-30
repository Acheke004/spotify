const express=require("express")
const app=express();
const mysql=require("mysql");
const routeuser=require('./routes/user')

const pool=mysql.createPool({
    host:'localhost',
    user:'ashu',
    database:'spotify',
    password:'ashu123'
})
app.use(express.json())
app.use('/user',routeuser)

app.listen(3000,function(){
    console.log("ok")
})




