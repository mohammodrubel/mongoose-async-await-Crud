const express = require('express')
const mongoose = require('mongoose')
const userSchemas = require('../Schemas/userSchemas')
const User = new mongoose.model("User",userSchemas)
const router = express.Router()


// router.post('/',(req,res)=>{
//     const newUser = User(req.body)
//     newUser.save((err)=>{
//         if(err){
//             res.status(500).json({
//                 error:'thare was a server side prbolem'
//             })
//         }else{
//             res.status(200).json({
//                 message:'new User Inserted Successfully'
//             })
//         }
//     })
// })

router.get('/',async (req,res)=>{
    try{
         const data =await  User.find({})
         res.status(200).json({
            result:data
        }) 
        
    }
    catch{
        res.status(500).json({
            error:'thare was a server side prbolem'
        })
    }
})

router.get('/:id',async (req,res)=>{
    try{
        const data = await User.find({_id:req.params.id})
        res.status(200).json({
            result:data
        })
    }
    catch{
        res.status(500).json({
            error:'thare was a server side prbolem'
        })
    }
})

router.post('/',async (req,res)=>{
    try{
        const newUser =await User(req.body)
        newUser.save()
        res.status(200).json({
            message:'new User Inserted Successfully'
        })
    }
    catch{
        res.status(500).json({
            error:'thare was a server side prbolem'
        })
    }
})

router.post('/all',async(req,res)=>{
    try{
         await User.insertMany(req.body)
         res.status(200).json({
            message:'Many User Inserted Successfully'
        })
    }
    catch{
        res.status(500).json({
            error:'thare was a server side prbolem'
        })
    }
})

router.put('/:id',async(req,res)=>{
    try{
        
        await User.updateOne({_id:req.params.id},{$set:{description:'Not a null'}})
        res.status(200).json({
            message:'update user Successfully'
        })
    }
    catch{
        res.status(200).json({
            message:'Many User Inserted Successfully'
        })
    }
})


router.delete('/:id',async(req,res)=>{
    try{
        await User.deleteOne({_id:req.params.id})
        res.status(200).json({
            message:'update user Successfully'
        })
    }
    catch{
        res.status(200).json({
            message:'User delete Successfully'
        })
    }
})



module.exports = router
