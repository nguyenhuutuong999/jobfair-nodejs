const express = require('express');
const router = express.Router();
const questionController = require('./../app/controllers/QuestionController');

router.get('/', questionController.index);
router.post('/', questionController.create)

module.exports = router;