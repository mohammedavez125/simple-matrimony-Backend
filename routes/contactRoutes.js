const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

router.get('/viewmessage', contactController.viewmessage);
router.post('/sendmessage', contactController.contact);

module.exports = router;