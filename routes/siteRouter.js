const express = require('express');
const siteCtrl = require('../controllers/siteCtrl');
// const adminCtrl = require('../controllers/adminCtrl');
const router = express.Router();

// SITE ROUTES
router.route('/')
  .get(siteCtrl.index);

// ADMIN router for welcome user message
// router.route('/admin')
//   .get(siteCtrl.admin);

// LOGINs
router.route('/register')
  .get(siteCtrl.register_get)
  .post(siteCtrl.register_post)

router.route('/login')
  .get(siteCtrl.login_get)
  .post(siteCtrl.login_post)

router.route('/logout')
  .get(siteCtrl.logout)

module.exports = router;