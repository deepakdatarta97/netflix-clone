const router = require("express").Router();
const User = require("../models/User");

//Register

router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
  });
  try {
    const user = await newUser.save();
    res.status(200).json(user);
    console.log(res.status(200).json(user));
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
