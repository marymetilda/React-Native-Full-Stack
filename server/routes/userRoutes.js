const express = require("express");
const {
  registerController,
  loginController,
  updateUserController,
} = require("../controllers/userController");

// router object
const router = express.Router();

// routers
// Register || POST
router.post("/register", registerController);

// Login || POST
router.post("/login", loginController);

// Update || PUT
router.put("/update-user", updateUserController);

module.exports = router;
