const { UsersModel } = require("../models/users.model");

exports.getAll = (req, res) => {
  
  if (!req.query) return res.status(400).send("Missing URL parameter: name");

  UsersModel.find()
    .sort({ name: 1 })
    .select({ name: 1, email: 1 })
    .then(doc => {
      res.status(200).json(doc);
    })
    .catch(err => {
      res.status(500).json(err);
    });
    
};
