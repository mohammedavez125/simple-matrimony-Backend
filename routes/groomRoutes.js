const express = require('express');
const router = express.Router();
const groomController = require('../controllers/groomController');

router.get('/view', groomController.viewGroom);
router.post('/add', groomController.addGroom);

module.exports = router;
