const Groom = require("../models/groomModel");

const addGroom = async (req, res) => {
  try {
    const {image , name, user_id, age, height, caste, education, salary, profession } = req.body;
    const groom = new Groom({image, name, user_id, age, height, caste, education, salary, profession });
    const savedGroom = await groom.save();
    res.json({
      success: true,
      message: "Groom added successfully",
      data: savedGroom,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error adding groom",
      error: error.message,
    });
  }
};

const viewGroom = async (req, res) => {
  try {
    const grooms = await Groom.find();
    res.json({
      success: true,
      message: "Grooms fetched successfully",
      data: grooms,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching grooms",
      error: error.message,
    });
  }
};

module.exports = {
  addGroom,
  viewGroom,
};
