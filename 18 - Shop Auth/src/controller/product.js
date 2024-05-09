const Product = require("../model/product");


const createProduct = async (req, res) => {
  const { id } = req.shop;
  if(!id) return res.status(404).json({ error: "Invalid ID." });

  try {
    const product = await Product.create({ shopId: id, ...req.body });
    res.status(200).json(product);
  } 
  catch (error) {
    res.status(400).json({ error: error.message });
  }
}


const getShopProducts = async (req, res) => {
  const { id } = req.params;

  try {
    const products = await Product.find({ shopId: id });
    res.status(200).json({ message: "Products retrieved", products });
  } 
  catch (error) {
    res.status(400).json({ error: error.message });
  }
}


const getProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findById({ _id: id });
    res.status(200).json(product);
  } 
  catch (error) {
    res.status(400).json({ error: error.message });
  }
}



const updateProduct = async (req, res) => {
  const { id } = req.shop;
  const { productId } = req.params;
  
  try { 
    if(req.body.shopId) return res.status(404).json({ error: "ShopId is restricted." });
    
    const product = await Product.findById({ _id: productId });
    if (id !== product.shopId) return res.status(404).json({ error: "Update is restricted." });

    const updatedProduct = await Product.findByIdAndUpdate(
      { _id: productId },
      { ...req.body },
      { new: true, runValidators: true }
    );
    res.status(200).json({ message: "Product updated.", updatedProduct });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}


const deleteProduct = async (req, res) => {
  const { id } = req.shop;
  const { productId } = req.params;
  
  try {     
    const product = await Product.findById({ _id: productId });
    if (id !== product.shopId) return res.status(404).json({ error: "Delete is restricted." });

    const deletedProduct = await Product.findByIdAndDelete({ _id: productId });
    res.status(200).json({ message: "Product deleted.", deletedProduct });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}


module.exports = {
  createProduct,
  getShopProducts,
  getProduct,
  updateProduct,
  deleteProduct
}