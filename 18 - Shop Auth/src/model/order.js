const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  shopId: { type: String, required: true },
  products: [ String ]
})

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;