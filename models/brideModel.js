const mongoose = require("mongoose");

const BrideSchema = new mongoose.Schema({
  image:String,
  name: { type: String, required: true },
  user_id: { type: String, unique: true, required: true },
  age: { type: Number, required: true },
  weight: String,
  height: String,
  caste: String,
  education: String,
});

module.exports = mongoose.model("Bride", BrideSchema);
