const router = require('express').Router();
const resultController = require('../../controllers/resultsController');

// Matches with "/api/results"
router.route('/')
    .get(resultController.findAll)
    .post(resultController.create)

// Matches with "/api/results/:id"
router.route("/:id")
    .get(resultController.findById)
    

module.exports = router;