const express=require("express")
const router=express.Router()
const db=require("../db")


router.get('/',(req,res)=>{

    
    res.send("okworking")
})
router.post('/signup',(req,res)=>{
    console.log(req.body.name)
const{name,email,pass}=req.body
console.log(name)
    const query1=`insert into user(name,email,pass) values ('${name}','${email}','${pass}')`
    db.query(query1,(err,result)=>{
        if(err){
            console.log("error"+err)
        }else{res.send(result)}
    })
})
router.post('/signin',(req,res)=>{
    const{email,pass}=req.body
    const query1=`select * from user where email='${email}' and pass='${pass}'`
    db.query(query1,(err,result)=>{
        if(err){
            console.log("error"+err)
            res.send(err)
        }else{res.send(result)}
    })
})
console.log("okuser")
module.exports=router

