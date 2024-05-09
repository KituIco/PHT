const express = require("express");
const router = express.Router();
const order = require("../controller/order");
const authMiddleware = require("../middleware/authMiddleware");


router.post("/", authMiddleware, order.createOrder);
router.get("/shop/", authMiddleware, order.getShopOrders);
router.get("/user/", authMiddleware, order.getUserOrders);
router.get("/:id", authMiddleware, order.getOrder);
router.patch("/:orderId", authMiddleware, order.updateOrder);
router.delete("/:orderId", authMiddleware, order.deleteOrder);


module.exports = router;