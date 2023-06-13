const express = require('express');
const router = express.Router();
const adminCtrl = require('../controllers/adminCtrl');

// ADMIN ROUTES
router.route('/')
  .get(adminCtrl.admin)

router.route('/admin-content')
  .get(adminCtrl.admin_content)

router.route('/create-content')
  .get(adminCtrl.create_content)

router.route('/:_id/edit-content')
  .get(adminCtrl.content_update_get)

// CONTENT ROUTES
router.route('/')
  .get(contentCtrl.all_content)
  .post(contentCtrl.content_create_post)

router.route('/:_id')
  .get(contentCtrl.content_detail)
  .put(contentCtrl.content_update_put)
  .delete(contentCtrl.content_delete)

module.exports = router;