const mongoose = require('mongoose');
let joi = require('joi');
const contactSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Phone: {
    type: Number,
    required: true,
  },
  Message: {
    type: String,
    required: true,
  },
});

const contactModel = mongoose.model('Contact', contactSchema);

// validation
function contactValidation(contactObj) {
  let contactVal = joi.object({
    Name: joi.string().required(),
    Phone: joi.number().required(),
    Message: joi.string().required(),
  });
  return contactVal.validate(contactObj);
}

module.exports = {
  contactModel,
  contactValidation,
};
