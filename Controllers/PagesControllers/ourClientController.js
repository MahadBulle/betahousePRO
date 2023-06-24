const {clientModel,clientvalidation} = require('../../Models/PagesModels/ourClientModel');
const joi = require ("joi");
//get start
const GetClient = async(req,res)=>{
    let hellGetClient=await clientModel.find()
    res.status(200).send(hellGetClient);
  };
//get ended
//get ById start
const GetClientById = async(req,res)=>{
    let hellGetClientById=await clientModel.findById(req.params.id)
    res.status(200).send(hellGetClientById); 
  }
//get ById ended
//post start
const PostClient = async (req, res, next) => {
    try {
      const { error } = clientvalidation(req.body);
      if (error) return res.status(400).send(error.message);
      let clientPosting=new clientModel(req.body);
      await clientPosting.save();
      res.status(201).send({
        status: true,
        clientPosting,
        message: 'succefully inserted ',
      });
    } catch (error) {
      res.status(400).send(error.message);
    }
  };
//post ended

//put/update houseImages start
const PutClient = async (req,res)=>{
    try {
        let ClientUpdating= await clientModel.findByIdAndUpdate(req.params.id,req.body,{new:true});
  
       res.status(200).send({
        status:'Success',
        message:"Successfully Updated",
        info: ClientUpdating
      });
    } catch (error) {
        res.status(400).send(error.message)
    }
  
  }
//put/update ended
//validation starts

//validation ended

module.exports = {
    GetClient,
    GetClientById,
    PostClient,
    PutClient
  };


