const express = require('express');
const router = express.Router();
const aboutCtrl = require('../controllers/aboutCtrl');

// ADMIN ROUTES
router.route('/about')
  .get(aboutCtrl.about)


module.exports = router;