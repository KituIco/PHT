const User = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const signupUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const exists = await User.findOne({ username });
    if (exists) return res.status(404).json({ error: "Username already in use." });

    req.body.password = await bcrypt.hash(password, 10);
    const newUser = await User.create({ ...req.body })
    res.status(201).json(newUser);
  } 
  catch (error) {
    res.status(400).json({ error: error.message });
  }
};


const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const exists = await User.findOne({ username });
    if (!exists) return res.status(404).json({ error: "Username does not exist." });

    const isPasswordMatched = await bcrypt.compare(password, exists.password);
    if (!isPasswordMatched) return res.status(404).json({ error: "Incorrect password." });
    
    const token = jwt.sign({ userId: exists._id }, process.env.JWT_SECRET);
    res.status(200).json({ username, token });
  } 
  catch (error) {
    res.status(400).json({ error: error.message });
  }
}


const getUser = async (req, res) => {
  const { id } = req.params.id ? req.params : req.user;
  if(!id) return res.status(404).json({ error: "Invalid ID." });
  
  try {
    const user = await User.findById({ _id: id });
    res.status(200).json(user);
  } 
  catch (error) {
    res.status(400).json({ error: error.message });
  }
}


const updatePassword = async (req, res) => {
  const { id } = req.user;
  const { oldPassword, newPassword } = req.body;
  if(!id) return res.status(404).json({ error: "Invalid ID." });

  try {
    const exists = await User.findById({ _id: id });

    const isPasswordMatched = await bcrypt.compare(oldPassword, exists.password);
    if (!isPasswordMatched) return res.status(404).json({ error: "Incorrect password." });

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    const user = await User.findByIdAndUpdate(
      { _id: exists._id },
      { password: hashedPassword },
      { new: true, runValidators: true }
    );
    res.status(200).json({ message: "Password changed.", user });
  } 
  catch (error) {
    res.status(400).json({ error: error.message });
  }
}


const updateUser = async (req, res) => {
  const { id } = req.user;
  if(!id) return res.status(404).json({ error: "Invalid ID." });

  try {
    if(req.body.password) return res.status(404).json({ error: "Password is restricted." });
    if(req.body.username) return res.status(404).json({ error: "Username is restricted." });

    const user = await User.findByIdAndUpdate(
      { _id: id },
      { ...req.body },
      { new: true, runValidators: true }
    );
    res.status(200).json({ message: "User updated.", user });
  } 
  catch (error) {
    res.status(400).json({ error: error.message });
  }
}


const deleteUser = async (req, res) => {
  const { id } = req.user;
  if(!id) return res.status(404).json({ error: "Invalid ID." });

  try {
    const user = await User.findByIdAndDelete({ _id: id });
    res.status(200).json({ message: "User removed.", user });
  } 
  catch (error) {
    res.status(400).json({ error: error.message });
  }
}


module.exports = {
  signupUser,
  loginUser,
  getUser,
  updatePassword,
  updateUser,
  deleteUser,
};
