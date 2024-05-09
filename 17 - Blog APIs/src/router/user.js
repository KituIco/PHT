const express = require("express");
const router = express.Router();
const user = require("../controller/user");


router.post("/signup", user.signupUser);
router.post("/login", user.loginUser);

module.exports = router;