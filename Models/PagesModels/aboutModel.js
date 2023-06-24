const mongoose = require('mongoose');
let joi = require('joi');
const aboutSchema = new mongoose.Schema({
  Description: {
    type: String,
    required: true,
  },
  ShortDescription: {
    type: String,
    required: true,
  },
});

const aboutModel = mongoose.model('About', aboutSchema);

// validation
function aboutValidation(aboutObj) {
  let aboutval = joi.object({
    Description: joi.string().required(),
    ShortDescription: joi.string().required(),
  });
  return aboutval.validate(aboutObj);
}

module.exports = {
  aboutModel,
  aboutValidation,
};
