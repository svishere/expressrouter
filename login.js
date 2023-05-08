const express =require('express')
const loginRouter=express.Router()

loginRouter.get('/',(request,response)=>{
    response.send("LOGIN PAGE")
})
module.exports=loginRouter
