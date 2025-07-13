const express = require('express');
const router = express.Router();
const brideController = require('../controllers/brideController');

// Routes for Bride
router.get('/view', brideController.viewBride);
router.post('/add', brideController.addBride);



module.exports = router;
