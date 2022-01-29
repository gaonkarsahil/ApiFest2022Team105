
const router = require('express').Router()
const Pet = require('../models/Pets')
const verify = require('../verifyToken')



//CREATE


router.post("/", verify, async (req, res)=>{
    console.log('This is the req and res',res,req)
    if( req.user.isAdmin){
       const newPet = new Pet(req.body)
       try{
         const savedPet = await newPet.save()
         res.status(200).json(savedPet)
       }
       catch(err){
           res.status(500).json(err)
       }
    } else{
        res.status(403).json('You are not allowed')
    }
})



//UPDATE
router.put("/:id", verify, async (req, res)=>{
    console.log('This is the req and res',res,req)
    if( req.user.isAdmin){
       try{
        const updatedPet = await Pet.findByIdAndUpdate(req.params.id, {$set: req.body },{new: true})
        //  const savedPet = await newPet.save()
         res.status(200).json(updatedPet)
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
         await Pet.findByIdAndDelete(req.params.id)
         res.status(200).json('The Pet has been deleted...')
       }
       catch(err){
           res.status(500).json(err)
       }
    } else{
        res.status(403).json('You are not allowed')
    }
})

//GET

router.get("/find/:id", verify, async (req, res)=>{
    console.log('This is the req and res',res,req)
       try{
        const Pet =  await Pet.findById(req.params.id)
         res.status(200).json(Pet)
       }
       catch(err){
           res.status(500).json(err)
       }
})



//GET RANDOM

router.get("/random", verify, async (req, res)=>{
    console.log('This is the req and res',res,req)
    const type = req.query.type;
    let Pet;
       try{
         if(type==="series"){
             Pet = await Pet.aggregate([
                 {$match: {isSeries: true}},
                 {$sample: {size: 1}}
             ])
         } else{
            Pet = await Pet.aggregate([
                {$match: {isSeries: false}},
                {$sample: {size: 1}}
            ])
         }
         res.status(200).json(Pet)
       }
       catch(err){
           res.status(500).json(err)
       }
})




//GET ALL USER


router.get("/", verify, async (req, res)=>{
    console.log('This is the req and res',res,req)
    if( req.user.isAdmin){
       try{
       const Pets =  await Pet.find(req.params.id)
         res.status(200).json(Pets.reverse())
       }
       catch(err){
           res.status(500).json(err)
       }
    } else{
        res.status(403).json('You are not allowed')
    }
})


module.exports = router