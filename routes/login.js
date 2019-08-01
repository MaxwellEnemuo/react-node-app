const { UsersModel, validateLogin } = require("../models/users.model");
const auth = require("../middleware/auth");
const bcrypt = require("bcryptjs");
const express = require("express");
const router = express.Router();

// LOGIN USER
router.post("/", auth, async (req, res, next) => {

  try {
    // call validator function and return error message if any
    const { error } = validateLogin(req);
    if (error) return res.status(400).json(error.details[0].message);

    // check for uniqueness of email
    let user = await UsersModel.findOne({ email: req.body.email });
    if (!user) return res.status(400).json("Invalid email or password");

    // Load hash from your password DB.
    const validpassword = await bcrypt.compare(req.body.password, user.password);

    if (!validpassword) return res.status(400).json("Invalid email or password");

    const token = user.generateloginToken();
    res.header("x-auth-token", token).json("You are logged in!");

  } catch (error) {
    
    res.status(500).json(error.errmsg);
  }
});

module.exports = router;