const housesModel = require('../Models/housesModel');
const joi = require ("joi");
//houses get starts
const GetHouses = async(req,res)=>{
    let hellguriyo=await housesModel.find().populate({
        path:"userId",
        model:"Users",
        select:"username"
      });
    res.send(hellguriyo);
  };
//houses get end
//houses getById starts
const GetHouseById = async(req,res)=>{
    let hellguri=await housesModel.findById(req.params.id).populate({
        path:"userId",
        model:"Users",
        select:"username"
      });
    res.send(hellguri); 
  }
//houses getById ends
//houses post starts
const PostHouses = async (req,res)=>{

    try {
      let {error}=HousesValidation(req.body);
      if(error)return res.send(error.message)
      let HousesPosting=new housesModel(req.body);
     await HousesPosting.save();
     res.send({
      status:'Success',
      message:"Successfully inserted",
      info: HousesPosting
    });
    } catch (error) {
      res.send({status:"Error",message:error.message}); 
    }
       
  }
//houses post ends
//houses put/update starts
const PutHouses = async (req,res)=>{
    try {
        let HousesUpdating= await housesModel.findByIdAndUpdate(req.params.id,req.body,{new:true});
       res.send({
        status:'Success',
        message:"Successfully Updated",
        info: HousesUpdating
      });
    } catch (error) {
        res.send(error.message) 
    }
  
  }
//houses put/update ends
//houses Delete starts
const DeleteHouses = async (req,res)=>{
    let deletingById = await housesModel.findByIdAndRemove(req.params.id)
    res.send({status:"success",message:`this House ${deletingById} Deleted successfully` })
  }
//houses Delete starts
//validation starts
function HousesValidation(HousesObj){
  let HousesVal=joi.object({
    Type:joi.string().required(),
    Area:joi.string().required(),
    Address:joi.string().required(), 
    Age:joi.string().required(), 
    Rent:joi.string().required(),
    Rooms:joi.number().required(),
    Toilets:joi.number().required(),
    MasterRoom:joi.string().required(),
    Parking:joi.string().required(),
    Image:joi.string().required(),
    Deposit:joi.string().required(),
    Status:joi.string().required(),
    Description:joi.string().required(),
  })
  return HousesVal.validate(HousesObj)
}
//validation ended

exports.GetHouses = GetHouses;
exports.GetHouseById = GetHouseById;
exports.PostHouses = PostHouses;
exports.PutHouses = PutHouses;
exports.DeleteHouses = DeleteHouses;

