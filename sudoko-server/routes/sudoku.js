const express = require('express');
const router = express.Router();
const { getSudoku, validateSudoku } = require('../controllers/sudokuController');

router.get('/', getSudoku);
router.post('/validate', validateSudoku);

module.exports = router;
