const express =require('express')
const aboutRouter=express.Router()

aboutRouter.get('/',(request,response)=>{
    response.send("ABOUT PAGE")
})
module.exports=aboutRouter
