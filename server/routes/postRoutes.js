const express = require("express");
const { requireSignIn } = require("../controllers/userController");
const {
  createPostController,
  getAllPostsController,
  getUserPostsController,
  deletePostController,
} = require("../controllers/postController");

// router object
const router = express.Router();

// CREATE POST || POST
router.post("/create-post", requireSignIn, createPostController);

// GET ALL POSTs || GET
router.get("/get-all-posts", getAllPostsController);

// GET USER POSTs || GET
router.get("/get-user-posts", requireSignIn, getUserPostsController);

// DELETE POST
router.delete("/delete-post/:id", requireSignIn, deletePostController);

// export
module.exports = router;
