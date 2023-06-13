const express = require('express');
const router = express.Router();
const contactCtrl = require('../controllers/contactCtrl');

router.route('/contact')
  .get(contactCtrl.contact)


module.exports = router;