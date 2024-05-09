const express = require("express");
const router = express.Router();
const post = require("../controller/post");
const authMiddleware = require("../middleware/authMiddleware");


router.post("/", authMiddleware, post.createPost);
router.get("/", post.getAllPosts);
router.get("/:id", post.getPost);
router.patch("/:id", authMiddleware, post.updatePost);
router.delete("/:id", authMiddleware, post.deletePost);

module.exports = router;