const express = require('express');
const router = express.Router();
const contactController = require('../app/controllers/ContactController')

router.post('/validate-submitted', contactController.validate);
router.post('/submit', contactController.submit);
router.get('/ranking', contactController.ranking);
router.get('/result/:id', contactController.result);
router.get('/', contactController.index)
module.exports = router;