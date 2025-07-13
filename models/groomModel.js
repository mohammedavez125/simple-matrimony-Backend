const mongoose = require("mongoose");

const GroomSchema = new mongoose.Schema({
  image:String,
  name: { type: String, required: true },
  user_id: { type: String, unique: true, required: true },
  age: { type: Number, required: true },
  height: String,
  caste: String,
  education: String,
  salary: Number,
  profession: String,
});

module.exports = mongoose.model("Groom", GroomSchema);
