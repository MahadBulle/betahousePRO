const {galleryModel,galleryvalidation} = require('../../Models/PagesModels/galleryModel');
const joi = require ("joi");
//get start
const Getgallery = async(req,res)=>{
    let hellGallery=await galleryModel.find()
    res.status(200).send(hellGallery);
  };
//get ended
//get ById start
const GetgalleryById = async(req,res)=>{
    let hellGetgalleryById=await galleryModel.findById(req.params.id)
    res.status(200).send(hellGetgalleryById); 
  }
//get ById ended
//post start
const Postgallery = async (req, res, next) => {
    try {
      const { error } = galleryvalidation(req.body);
      if (error) return res.status(400).send(error.message);
      let galleryPosting=new galleryModel(req.body);
      await galleryPosting.save();
      res.status(201).send({
        status: true,
        galleryPosting,
        message: 'succefully inserted ',
      });
    } catch (error) {
      res.status(400).send(error.message);
    }
  };
//post ended

//put/update houseImages start
const Putgallery = async (req,res)=>{
    try {
        let galleryUpdating= await galleryModel.findByIdAndUpdate(req.params.id,req.body,{new:true});
  
       res.status(200).send({
        status:'Success',
        message:"Successfully Updated",
        info: galleryUpdating
      });
    } catch (error) {
        res.status(400).send(error.message)
    }
  
  }
//put/update ended
//validation starts

//validation ended

module.exports = {
    Getgallery,
    GetgalleryById,
    Postgallery,
    Putgallery
  };


