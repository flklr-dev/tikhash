const express = require('express');
const router = express.Router();
const { generateHashtags, getTrendingHashtags } = require('../controllers/hashtagController');

router.post('/generate', generateHashtags);
router.get('/trending', getTrendingHashtags);

module.exports = router; 