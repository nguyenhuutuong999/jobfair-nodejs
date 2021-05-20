const express = require('express');
const router = express.Router();
const contactController = require('../app/controllers/ContactController')

router.post('/', contactController.index);
router.get('/ranking', contactController.ranking);
router.get('/result/:id', contactController.result);
module.exports = router;