const { UsersModel, validate } = require("../models/users.model");
const bcrypt = require("bcryptjs");
const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");


// REGISTER USERS
router.post("/", auth, async (req, res) => {

  // call validator function and return error message if any
  const { error } = validate(req);
  if (error) return res.status(400).json(error.details[0].message)

  // check for uniqueness of email
  let oneUser = await UsersModel.findOne({ email: req.body.email });
  if (oneUser) return res.status(400).json(`${req.body.email} already exist`);

  // instantiate the userModel class to save data
  const user = new UsersModel(req.body);

  // hash password using bcrypt
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);

  await user
    .save()
    .then(doc => {
      if (!doc || doc.length === 0) {
        return res.status(500).send(doc);
      }

      res.status(201).send(doc);
    })
    .catch(err => {
      res.status(500).json(err.errmsg);
    });
});



// GET ALL
router.get("/", (req, res) => {
  if (!req.query) return res.status(400).send("Missing URL parameter: name");

  UsersModel.find()
    .sort({ name: 1 })
    .select({ name: 1, email: 1 })
    .then(doc => {
      res.json(doc);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});



// GET ONE
router.get("/:id", (req, res) => {
  UsersModel.findById({ _id: req.params.id })
    .then(doc => {
      res.json(doc);
    })
    .catch(err => {
      res.status(400).json(err + " :User id does not exist");
    });
});



// UPDATE
router.put("/:id", async (req, res) => {
  
  // call validator function and return error message if any
  const { error } = validate(req);
  if (error) return res.status(400).json(error.details[0].message)

  // hash password using bcrypt
  const salt = await bcrypt.genSalt(10);
  req.body.password = await bcrypt.hash(req.body.password, salt);

  await UsersModel.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    useFindAndModify: false
  })
    .then(doc => {
      res.json(doc);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});



// DELETE
router.delete("/:id", (req, res) => {
  if (!req.params.id)
    return res.status(400).send("Missing URL parameter: name");

  UsersModel.findOneAndRemove(
    { _id: req.params.id },
    { useFindAndModify: false }
  )
    .then(res.json("User has been deleted!"))
    .catch(err => {
      res.status(500).json(err);
    });
});



module.exports = router;
