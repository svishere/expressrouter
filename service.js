const express =require('express')
const serviceRouter=express.Router()

serviceRouter.get('/',(request,response)=>{
    response.send("SERVICE PAGE")
})
module.exports=serviceRouter
