const express = require("express");
const {
  registerController,
  loginController,
} = require("../controllers/userController");

// router object
const router = express.Router();

// routers
// Register || POST
router.post("/register", registerController);

// Login || POST
router.post("/login", loginController);

module.exports = router;
