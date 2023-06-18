const himagesModel = require('../Models/himagesModel');
const joi = require ("joi");
//get houseImages start
const GetHimages = async(req,res)=>{
    let hellHimages=await himagesModel.find().populate({
        path:"userId",
        model:"Users",
        select:"username"
      });
    res.send(hellHimages);
  };
//get houseImages ended
//get houseImagesById start
const GetHimagesById = async(req,res)=>{
    let hellHimages=await himagesModel.findById(req.params.id).populate({
        path:"userId",
        model:"Users",
        select:"username"
      });
    res.send(hellHimages); 
  }
//get houseImagesById ended
//post houseImages start
const PostHimages = async (req,res)=>{
    try {
      let {error}=himagesValdation(req.body);
      if(error)return res.send(error.message)
      let himagesPosting=new himagesModel(req.body);
     await himagesPosting.save();
     res.send({
      status:'Success',
      message:"Successfully inserted",
      info: himagesPosting
    });
  
    } catch (error) {
      res.send({status:"Error",message:error.message});
 
    }
  }
//post houseImages ended
//put/update houseImages start
const PutHimages = async (req,res)=>{
    try {
        let himagesUpdating= await himagesModel.findByIdAndUpdate(req.params.id,req.body,{new:true});
  
  
       res.send({
        status:'Success',
        message:"Successfully Updated",
        info: himagesUpdating
      });
    } catch (error) {
        res.send(error.message)
        
    }
  
  }
//put/update houseImages ended
//Delete houseImages start
const DeleteHimages = async (req,res)=>{
    let deletingById = await himagesModel.findByIdAndRemove(req.params.id)
    res.send({status:"success",message:`this Himages ${deletingById} are Deleted successfully` })
  }
//Delete houseImages ended


//validation starts
function himagesValdation(himagesObj){
  let himagesVal=joi.object({
    houseId:joi.string().required(),
    images:joi.string().required(),
    userId:joi.string().required(), 
   
  })
  return himagesVal.validate(himagesObj)
}
//validation ended

exports.GetHimages = GetHimages;
exports.GetHimagesById = GetHimagesById;
exports.PostHimages = PostHimages;
exports.PutHimages = PutHimages;
exports.DeleteHimages = DeleteHimages;

