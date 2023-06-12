const express = require('express');
const contentCtrl = require('../controllers/contentCtrl');
const router = express.Router();

// BOOKS ROUTES
router.route('/')
  .get(contentCtrl.all_content)
  .post(contentCtrl.content_create_post)

router.route('/:_id')
  .get(contentCtrl.content_detail)
  .put(contentCtrl.content_update_put)
  .delete(contentCtrl.content_delete)

module.exports = router;