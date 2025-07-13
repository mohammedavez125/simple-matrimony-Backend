const Bride = require("../models/brideModel");

const addBride = async (req, res) => {
  try {
    const { image, name, user_id, age, height, caste, education ,weight } = req.body;
    const bride = new Bride({ image ,name, user_id, age, height, caste, education , weight });
    const savedBride = await bride.save();
    res.json({
      success: true,
      message: "Bride added successfully",
      data: savedBride,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error adding bride",
      error: error.message,
    });
  }
};

const viewBride = async (req, res) => {
  try {
    const brides = await Bride.find();
    res.json({
      success: true,
      message: "Brides fetched successfully",
      data: brides,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching brides",
      error: error.message,
    });
  }
};

module.exports = {
  addBride,
  viewBride,
};
