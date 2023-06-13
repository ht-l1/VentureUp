const express = require('express');
const contentCtrl = require('../controllers/contentCtrl');
const router = express.Router();
// const adminCtrl = require('../controllers/adminCtrl');

// CONTENT ROUTES
router.route('/')
  .get(contentCtrl.all_content)
  
router.route('/:_id')
  .get(contentCtrl.content_detail)
  .put(contentCtrl.content_update_put)
  .delete(contentCtrl.content_delete)

router.route('/contentCreate')
  .get(contentCtrl.content_create_get)
  .post(contentCtrl.content_create_post)

module.exports = router;