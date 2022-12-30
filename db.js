const express=require("express")
const app=express();
const mysql=require("mysql");


const pool=mysql.createPool({
    host:'localhost',
    user:'ashu',
    database:'spotify',
    password:'ashu123'
})

module.exports=pool