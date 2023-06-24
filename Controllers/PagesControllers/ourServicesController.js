const {serviceModel, serviceValidation} = require('../../Models/PagesModels/ourServicesModel')
const joi = require ("joi");
//get start
const GetService = async(req,res)=>{
    let hellGetService=await serviceModel.find()
    res.status(200).send(hellGetService);
  };
//get ended
//get ById start
const GetServiceById = async(req,res)=>{
    let hellGetServiceById=await serviceModel.findById(req.params.id)
    res.status(200).send(hellGetServiceById); 
  }
//get ById ended 
//post start
const PostService = async (req, res, next) => {
    try {
      const { error } = serviceValidation(req.body);
      if (error) return res.status(400).send(error.message);
      let ServicePosting=new serviceModel(req.body);
      await ServicePosting.save();
      res.status(201).send({
        status: true,
        ServicePosting,
        message: 'succefully inserted ',
      });
    } catch (error) {
      res.status(400).send(error.message);
    }
  };
//post ended

//put/update houseImages start
const PutService = async (req,res)=>{
    try {
        let ServiceUpdating= await serviceModel.findByIdAndUpdate(req.params.id,req.body,{new:true});
  
       res.status(200).send({
        status:'Success',
        message:"Successfully Updated",
        info: ServiceUpdating
      });
    } catch (error) {
        res.status(400).send(error.message)
    }
  
  }
//put/update ended
//validation starts

//validation ended

module.exports = {
    GetService,
    GetServiceById,
    PostService,
    PutService
  };


