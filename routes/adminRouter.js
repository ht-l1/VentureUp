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

// router.route('/admin-authors')
//   .get(adminCtrl.admin_authors)

// router.route('/create-author')
//   .get(adminCtrl.create_author)

router.route('/:_id/edit-content')
  .get(adminCtrl.content_update_get)

// router.route('/:_id/edit-author')
//   .get(adminCtrl.author_update_get)


module.exports = router;