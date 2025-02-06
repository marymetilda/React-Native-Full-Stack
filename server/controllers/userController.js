const userModel = require("../models/userModel");
const { hashPassword } = require("../utils/authHelper");

const registerController = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    //Validation
    if (!name) {
      return res.status(400).send({
        success: false,
        message: "Name is required!",
      });
    }
    if (!email) {
      return res.status(400).send({
        success: false,
        message: "Email is required!",
      });
    }
    if (!password || password.length < 6) {
      return res.status(400).send({
        success: false,
        message: "Password is required and 6 characters long!",
      });
    }

    // existing user
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(500).send({
        success: false,
        message: "User already register with this email",
      });
    }

    // hashed password
    const hashedPassword = await hashPassword(password);

    // Save user
    const user = await userModel({
      name,
      email,
      password: hashedPassword,
    }).save();

    return res.status(200).send({
      success: true,
      message: "Registration Successful please login!",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in Register API",
      error,
    });
  }
};

module.exports = { registerController };
