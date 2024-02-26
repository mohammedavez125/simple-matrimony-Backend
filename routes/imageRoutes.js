const express = require("express");
const imageControllers = require("../controllers/imageController");
const router = express.Router();

router.post("/upload-image", imageControllers.uploadImage);
router.get("/get-image", imageControllers.getImages);

module.exports = router;