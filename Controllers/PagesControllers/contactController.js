const {contactModel,contactValidation} = require('../../Models/PagesModels/contactModel');
const joi = require ("joi");
//get start
const GetContact = async(req,res)=>{
    let hellGetContact=await contactModel.find()
    res.status(200).send(hellGetContact);
  };
//get ended
//get ById start
const GetContactById = async(req,res)=>{
    let hellGetContactById=await contactModel.findById(req.params.id)
    res.status(200).send(hellGetContactById); 
  }
//get ById ended
//post start
const PostContact = async (req, res, next) => {
    try {
      const { error } = contactValidation(req.body);
      if (error) return res.status(400).send(error.message);
      let contactPosting=new contactModel(req.body);
      await contactPosting.save();
      res.status(201).send({
        status: true,
        contactPosting,
        message: 'succefully inserted ',
      });
    } catch (error) {
      res.status(400).send(error.message);
    }
  };
//post ended

//put/update houseImages start
const PutContact = async (req,res)=>{
    try {
        let ContactUpdating= await contactModel.findByIdAndUpdate(req.params.id,req.body,{new:true});
  
       res.status(200).send({
        status:'Success',
        message:"Successfully Updated",
        info: ContactUpdating
      });
    } catch (error) {
        res.status(400).send(error.message)
    }
  
  }
//put/update ended
//validation starts

//validation ended

module.exports = {
    GetContact,
    GetContactById,
    PostContact,
    PutContact
  };


