const express =require('express')
const contactRouter=express.Router()

contactRouter.get('/',(request,response)=>{
    response.send("CONTACT PAGE")
})
module.exports=contactRouter
