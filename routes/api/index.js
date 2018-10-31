// this file is for multiple routes after /api/...

const router = require('express').Router();
const resultRoutes = require('./results');

// result routes
router.use('/results', resultRoutes);

module.exports = router;