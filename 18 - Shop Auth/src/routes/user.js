const express = require("express");
const router = express.Router();
const user = require("../controller/user");
const authMiddleware = require("../middleware/authMiddleware");


router.post("/signup", user.signupUser);
router.post("/login", user.loginUser);

router.get("/:id?", authMiddleware, user.getUser);
router.patch("/changePassword", authMiddleware, user.updatePassword);
router.patch("/", authMiddleware, user.updateUser);
router.delete("/", authMiddleware, user.deleteUser);

module.exports = router;