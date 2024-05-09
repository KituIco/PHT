const express = require("express");
const router = express.Router();
const product = require("../controller/product");
const authMiddleware = require("../middleware/authMiddleware");


router.post("/", authMiddleware, product.createProduct);
router.get("/shop/:id", product.getShopProducts);
router.get("/:id", product.getProduct);
router.patch("/:productId", authMiddleware, product.updateProduct);
router.delete("/:productId", authMiddleware, product.deleteProduct);


module.exports = router;