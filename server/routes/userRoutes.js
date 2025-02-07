const express = require("express");
const {
  registerController,
  loginController,
  updateUserController,
  requireSignIn,
} = require("../controllers/userController");

// router object
const router = express.Router();

// routers
// Register || POST
router.post("/register", registerController);

// Login || POST
router.post("/login", loginController);

// Update || PUT
router.put("/update-user", requireSignIn, updateUserController);

module.exports = router;
