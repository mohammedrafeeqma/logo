
const express = require('express')
const Logo = require('../modals/Logo')
const router = express.Router()
const {cloudinary} = require('../utils/Cloudinary')


//add logo
router.post('/',async(req,res)=>{
    const newLogo = await new Logo(req.body)
    try {
        const savedLogo = await newLogo.save()
        res.status(200).json(savedLogo)
    } catch (error) {
        
    }

})

//upload logo
router.post('/upload',async(req,res)=>{
    try {
        const fileStr = req.body.image
        const uploadResponse = await cloudinary.uploader.upload(fileStr)
        res.status(200).json(uploadResponse.secure_url)
    } catch (error) {
        console.log(22);
        console.log(error);
        res.status(500).json(error)
    }
})
//get logos

router.get('/',async(req,res)=>{

    try {
        const logo = await Logo.find()
        res.status(200).json(logo)
    } catch (error) {
        
    }

})
//get logo
router.get('/:id',async(req,res)=>{
    try {
        const logo = await Logo.findById(req.params.id)
        res.status(200).json(logo)
    } catch (error) {
        
    }
})
//update logo

router.put('/:id',async(req,res)=>{
    try {
      const logo = await Logo.findByIdAndUpdate(req.params.id,{
        $set:req.body
      })
      res.status(200).json('logo has been updated')
    } catch (error) {
      
    }
  })
//delete logo

router.delete('/:id',async(req,res)=>{
    console.log(333);

    try {
        await Logo.findByIdAndDelete(req.params.id)
        res.status(200).json('logo has been deleted')
    } catch (error) {
        
    }


})

module.exports = router