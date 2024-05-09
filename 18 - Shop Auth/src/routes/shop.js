const express = require("express");
const router = express.Router();
const shop = require("../controller/shop");
const authMiddleware = require("../middleware/authMiddleware");


router.post("/signup", shop.signupShop);
router.post("/login", shop.loginShop);
router.get("/all", shop.getAllShops);
router.get("/:id", shop.getShop);

router.get("/", authMiddleware, shop.getOwnShop);
router.patch("/changePassword", authMiddleware, shop.updatePassword);
router.patch("/", authMiddleware, shop.updateShop);
router.delete("/", authMiddleware, shop.deleteShop);

module.exports = router;