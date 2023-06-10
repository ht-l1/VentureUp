const express = require('express');
const router = express.Router();
const loginCtrl = require('../controllers/loginCtrl');

// ADMIN ROUTES
router.route('/login')
  .get(loginCtrl.login)


module.exports = router;