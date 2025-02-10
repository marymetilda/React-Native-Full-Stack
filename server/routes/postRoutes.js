const express = require("express");
const { requireSignIn } = require("../controllers/userController");
const {
  createPostController,
  getAllPostsController,
  getUserPostsController,
  deletePostController,
  updatePostController,
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

// UPDATE POST
router.put("/update-post/:id", requireSignIn, updatePostController);

// export
module.exports = router;
