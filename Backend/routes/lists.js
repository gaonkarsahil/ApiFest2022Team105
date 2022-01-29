
const router = require('express').Router()
const List = require('../models/List')
const verify = require('../verifyToken')



//CREATE


router.post("/", verify, async (req, res)=>{
    console.log('This is the req and res',res,req)
    if( req.user.isAdmin){
       const newList = new List(req.body)
       try{
         const savedList = await newList.save()
         res.status(200).json(savedList)
       }
       catch(err){
           res.status(500).json(err)
       }
    } else{
        res.status(403).json('You are not allowed')
    }
})


//DELETE


router.delete("/:id", verify, async (req, res)=>{
    console.log('This is the req and res',res,req)
    if( req.user.isAdmin){
       try{
         await List.findByIdAndDelete(req.params.id)
         res.status(200).json('The list has been deleted')
       }
       catch(err){
           res.status(500).json(err)
       }
    } else{
        res.status(403).json('You are not allowed')
    }
})

//GET

router.get('/', verify, async (req,res)=>{
    const typeQuery = req.query.type
    const breedQuery = req.query.breed
    let list = []

    try{
        if(typeQuery) {
            if(breedQuery) {
                list = await List.aggregate([{$sample: {size: 10}},{$match: {type: typeQuery, breed: breedQuery}}])
           }
           else{
            list = await List.aggregate([{$sample: {size:10}},{$match: {type: typeQuery}}])
          }
        }
        else{
            list = await List.aggregate([{$sample: {size: 10}}])
        }
        res.status(200).json(list)
    }
    
    catch(err){
        res.status(500).json(err)
    }
})




module.exports = router
