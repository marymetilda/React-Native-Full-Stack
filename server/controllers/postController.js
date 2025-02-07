const postModel = require("../models/postModel");

const createPostController = async (req, res) => {
  try {
    const { title, description } = req.body;
    // Validate
    if (!title || !description) {
      return res.status(500).send({
        success: false,
        message: "Please provide all fields",
      });
    }
    const post = await postModel({
      title,
      description,
      postedBy: req.auth._id,
    }).save();

    res.status(201).send({
      success: true,
      message: "Post Created Successfully",
      post,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ success: false, message: "Error in Create Post Api" });
  }
};

module.exports = { createPostController };
