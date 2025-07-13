const express = require("express");
const userControllers = require("../controllers/userController");
const router = express.Router();

// router for all users
router.post("/forgot-password", userControllers.forgotPassword);
router.get("/reset-password/:id/:token", userControllers.resetPasswordGet);
router.post("/reset-password/:id/:token", userControllers.resetPasswordPost);
router.get("/paginatedUsers", userControllers.paginatedUsers);
router.post("/userData", userControllers.userData);
router.post("/login-user", userControllers.loginUser);
router.get("/getusers", userControllers.getAllUsers);
router.post("/deleteUser", userControllers.deleteUser);
router.post("/register", userControllers.registerUser);

module.exports = router;