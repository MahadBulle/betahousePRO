const mongoose = require('mongoose');
let joi = require('joi');
const serviceSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: true,
  },
  Icon: {
    type: String,
    required: true,
  },
  Decribtion: {
    type: String,
    required: true,
  },
});

const serviceModel = mongoose.model('service', serviceSchema);

// valiidation
function serviceValidation(servicetOBj) {
  let serviceVal = joi.object({
    Title: joi.string().required(),
    Icon: joi.string().required(),
    Decribtion: joi.string().required(),
  });
  return serviceVal.validate(servicetOBj);
}

module.exports = {
  serviceModel,
  serviceValidation,
};
