const express = require('express');
const router = express.Router();
const adminCtrl = require('../controllers/adminCtrl');

// ADMIN ROUTES
router.route('/admin')
  .get(adminCtrl.all_content)
  .post(adminCtrl.submit_form)

router.route('/contentCreate')
  .get(adminCtrl.create_content)
  // .post(adminCtrl.submit_form);

router.route('/admin/:_id')
  .get(adminCtrl.all_content)
  .delete(adminCtrl.content_delete);

module.exports = router;