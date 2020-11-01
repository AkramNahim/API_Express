const express = require('express');
// Require methods from bootcamps.js (controller) usong desctructring
const {
  getBootcamps,
  getBootcamp,
  addBootcamp,
  updateBootcamp,
  deleteBootcamp,
} = require('../controllers/bootcamps');

const router = express.Router();
router.route('/').get(getBootcamps).post(addBootcamp);
router
  .route('/:id')
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

module.exports = router;
