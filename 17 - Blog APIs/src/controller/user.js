const User = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// signup
const signupUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    // check if username exists
    const exists = await User.findOne({ username });

    // if exists, do not proceed
    if (exists) {
      return res.status(400).json({ error: "Username already in use." });
    }

    // else proceed
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      username,
      password: hashedPassword
    })

    res.status(201).json({ newUser });
  } 
  catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// login
const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    // check if username exists
    const exists = await User.findOne({ username });

    // if does not exists, do not proceed
    if (!exists) {
      return res.status(404).json({ error: "Username does not exist." });
    }

    // if password is incorrect, do not proceed
    const isPasswordMatched = await bcrypt.compare(password, exists.password);
    if (!isPasswordMatched) {
      return res.status(400).json({ error: "Inccorrect password" });
    }

    const token = jwt.sign({ userId: exists._id }, process.env.JWT_SECRET);
    res.status(200).json({ username, token });
  } 
  catch (error) {
    res.status(400).json({ error: error.message });
  }
}


module.exports = {
  signupUser,
  loginUser
};
