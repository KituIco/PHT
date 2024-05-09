const Shop = require("../model/shop");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const signupShop = async (req, res) => {
  const { username, password } = req.body;

  try {
    const exists = await Shop.findOne({ username });
    if (exists) return res.status(404).json({ error: "Username already in use." });

    req.body.password = await bcrypt.hash(password, 10);
    const newShop = await Shop.create({ ...req.body })
    res.status(201).json(newShop);
  } 
  catch (error) {
    res.status(400).json({ error: error.message });
  }
};


const loginShop = async (req, res) => {
  const { username, password } = req.body;

  try {
    const exists = await Shop.findOne({ username });
    if (!exists) return res.status(404).json({ error: "Username does not exist." });

    const isPasswordMatched = await bcrypt.compare(password, exists.password);
    if (!isPasswordMatched) return res.status(404).json({ error: "Incorrect password." });
    
    const token = jwt.sign({ shopId: exists._id }, process.env.JWT_SECRET);
    res.status(200).json({ username, token });
  } 
  catch (error) {
    res.status(400).json({ error: error.message });
  }
}


const getAllShops = async (req, res) => {
  try {
    const shops = await Shop.find();
    res.status(200).json({ count: shops.length, shops});
  } 
  catch (error) {
    res.status(400).json({ error: error.message });
  }
}


const getShop = async (req, res) => {
  const { id } = req.params;
  
  try {
    const shop = await Shop.findById({ _id: id });
    res.status(200).json(shop);
  } 
  catch (error) {
    res.status(400).json({ error: error.message });
  }
}


const getOwnShop = async (req, res) => {
  const { id } = req.shop;
  if(!id) return res.status(404).json({ error: "Invalid ID." });
  
  try {
    const shop = await Shop.findById({ _id: id });
    res.status(200).json(shop);
  } 
  catch (error) {
    res.status(400).json({ error: error.message });
  }
}


const updatePassword = async (req, res) => {
  const { id } = req.shop ;
  const { oldPassword, newPassword } = req.body;
  if(!id) return res.status(404).json({ error: "Invalid ID." });

  try {
    const exists = await Shop.findById({ _id: id });

    const isPasswordMatched = await bcrypt.compare(oldPassword, exists.password);
    if (!isPasswordMatched) return res.status(404).json({ error: "Incorrect password." });

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    const shop = await Shop.findByIdAndUpdate(
      { _id: exists._id },
      { password: hashedPassword },
      { new: true, runValidators: true }
    );
    res.status(200).json({ message: "Password changed.", shop });
  } 
  catch (error) {
    res.status(400).json({ error: error.message });
  }
}


const updateShop = async (req, res) => {
  const { id } = req.shop;
  if(!id) return res.status(404).json({ error: "Invalid ID." });

  try {
    if(req.body.password) return res.status(404).json({ error: "Password is restricted." });
    if(req.body.username) return res.status(404).json({ error: "Username is restricted." });

    const shop = await Shop.findByIdAndUpdate(
      { _id: id },
      { ...req.body },
      { new: true, runValidators: true }
    );
    res.status(200).json({ message: "Shop updated.", shop });
  } 
  catch (error) {
    res.status(400).json({ error: error.message });
  }
}


const deleteShop = async (req, res) => {
  const { id } = req.shop;
  if(!id) return res.status(404).json({ error: "Invalid ID." });

  try {
    const shop = await Shop.findByIdAndDelete({ _id: id });
    res.status(200).json({ message: "Shop removed.", shop });
  } 
  catch (error) {
    res.status(400).json({ error: error.message });
  }
}


module.exports = {
  signupShop,
  loginShop,
  getShop,
  getOwnShop,
  getAllShops,
  updatePassword,
  updateShop,
  deleteShop,
};
