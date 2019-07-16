let mongoose = require("mongoose");
const Joi = require("@hapi/joi");
const jwt = require("jsonwebtoken");
require('dotenv').config();
const jwtPrivateKey = process.env.jwtPrivateKey;

let UsersSchema = new mongoose.Schema({
  name: {
    type: String, 
    required: true,
    minlength:5,
    maxlength:50
  },
  email: {
    type: String, 
    unique: true,
    required: true,
    minlength:5,
    maxlength:225
  },
  password: {
    type: String, 
    required: true,
    minlength:5,
    maxlength:500
  }
});

UsersSchema.methods.generateloginToken = function () {  
  const token = jwt.sign({_id: this._id}, jwtPrivateKey);
  return token;
}

exports.validate = function validateUser(req) {

    // validating with joi
    const schema = {
      name: Joi.string().min(5).max(50).required(),
      email: Joi.string().required().min(5).max(255).email(),
      password: Joi.string().required().min(5).max(500)
    };

    // return Joi.validate(req.body, schema);
    return Joi.validate(req.body, schema);   
}

exports.validateLogin = (req) => {

    // validating with joi
    const schema = {
      email: Joi.string().required().min(5).max(255).email(),
      password: Joi.string().required().min(5).max(500)
    };

    // return Joi.validate(req.body, schema);
    return Joi.validate(req.body, schema);   
}


exports.UsersModel = mongoose.model("Users", UsersSchema);
