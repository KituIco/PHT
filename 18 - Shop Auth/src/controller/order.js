const Order = require("../model/order");


const createOrder = async (req, res) => {
  const { id } = req.user;
  if(!id) return res.status(404).json({ error: "Invalid ID." });

  try {
    const order = await Order.create({ userId: id, ...req.body });
    res.status(200).json(order);
  } 
  catch (error) {
    res.status(400).json({ error: error.message });
  }
}

const getShopOrders = async (req, res) => {
  const { id } = req.shop;
  if(!id) return res.status(404).json({ error: "Invalid ID." });

  try {
    const orders = await Order.find({ shopId: id });
    res.status(200).json({ message: "Products retrieved", orders });
  } 
  catch (error) {
    res.status(400).json({ error: error.message });
  }
}


const getUserOrders = async (req, res) => {
  const { id } = req.user;
  if(!id) return res.status(404).json({ error: "Invalid ID." });

  try {
    const orders = await Order.find({ userId: id });
    res.status(200).json({ message: "Products retrieved", orders });
  } 
  catch (error) {
    res.status(400).json({ error: error.message });
  }
}


const getOrder = async (req, res) => {
  const { id } = req.params;

  try {
    const order = await Order.findById({ _id: id });
    res.status(200).json(order);
  } 
  catch (error) {
    res.status(400).json({ error: error.message });
  }
}


const updateOrder = async (req, res) => {
  const { id } = req.user;
  const { orderId } = req.params;
  
  try { 
    if(req.body.shopId) return res.status(404).json({ error: "ShopId is restricted." });
    if(req.body.userId) return res.status(404).json({ error: "UserId is restricted." });
    
    const order = await Order.findById({ _id: orderId });
    if (id !== order.userId) return res.status(404).json({ error: "Update is restricted." });

    const updatedOrder = await Order.findByIdAndUpdate(
      { _id: orderId },
      { ...req.body },
      { new: true, runValidators: true }
    );
    res.status(200).json({ message: "Order updated.", updatedOrder });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}


const deleteOrder = async (req, res) => {
  const { id } = req.user;
  const { orderId } = req.params;
  
  try {   
    const order = await Order.findById({ _id: orderId });
    if (id !== order.userId) return res.status(404).json({ error: "Update is restricted." });

    const deletedOrder = await Product.findByIdAndDelete({ _id: orderId });
    res.status(200).json({ message: "Order updated.", deletedOrder });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}


module.exports = {
  createOrder,
  getShopOrders,
  getUserOrders,
  getOrder,
  updateOrder,
  deleteOrder
}