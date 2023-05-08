const express =require('express')
const app=express()
const contactRouter=require('./contact')
const serviceRouter=require('./service')
const aboutRouter=require('./about')
const loginRouter=require('./login')

app.get('/',(request,response)=>{
    response.send("HOME PAGE")
})
app.use('/contact',contactRouter)
app.use('/service',serviceRouter)
app.use('/about',aboutRouter)
app.use('/login',loginRouter)


app.listen(4500)