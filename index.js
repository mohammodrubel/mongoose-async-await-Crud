const express =require('express')
const mongoose = require('mongoose')
const routeHandeler = require('./RouterHandeler/routeHandeler')



const app = express()
app.use(express.json())

// Database Connection 

mongoose.connect('mongodb://localhost/users')

    .then(()=>console.log('Database Connceiotn Ready'))
    .catch(err => console.log(err))


// Router 
app.use('/user',routeHandeler)


// express error 
function errorHandeler(err,req,res,next){
    if(res.headerSent){
        return next(err)
    }
    res.status(500).json({
        error:err
    })
}
// port number 
app.listen(5000,()=>{
    console.log('server is running ...')
})



