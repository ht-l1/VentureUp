const express = require('express');
const router = express.Router();
const adminCtrl = require('../controllers/adminCtrl');

// ADMIN ROUTES
router.route('/admin')
  .get(adminCtrl.admin)
  .post(adminCtrl.create_content);

// router.route('/contentCreate')
//   .get(adminCtrl.create_content);

router.route('/contentCreate')
  .get(adminCtrl.create_content)
  .post(adminCtrl.submit_form);

router.route('/:_id')
  .get(adminCtrl.content_detail)
  .delete(adminCtrl.content_delete)

module.exports = router;