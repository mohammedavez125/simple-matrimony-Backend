const mongoose = require("mongoose");

const UserDetailsSchema = new mongoose.Schema(
  {
    fname: String,
    lname: String,
    email: { type: String, unique: true },
    password: String,
    userType: String,
    subscriptionStatus: { type: Boolean, default: false },
    phoneNumber: String,
  },
  {
    collection: "UserInfo",
  }
);

module.exports = mongoose.model("User", UserDetailsSchema);
