const express = require('express');
const router = express.Router();
const contactCtrl = require('../controllers/contactCtrl');

// ADMIN ROUTES
router.route('/contact')
  .get(contactCtrl.contact)


module.exports = router;