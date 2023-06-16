const express = require('express');
const router = express.Router();
const adminCtrl = require('../controllers/adminCtrl');

// ADMIN ROUTES
router.route('/admin')
  .get(adminCtrl.all_content)
  .post(adminCtrl.submit_form)

  // CREATE
router.route('/contentCreate')
  .get(adminCtrl.create_content)

  // UPDATE
router.route('/updateContent/:_id/')
  .get(adminCtrl.content_update_get)
  // delete below and move under DELETE function because I want return admin page.
  // .put(adminCtrl.content_update_put)

  // DELETE
router.route('/admin/:_id')
  .get(adminCtrl.all_content)
  .delete(adminCtrl.content_delete)
  // TEST!!
  .put(adminCtrl.content_update_put);

module.exports = router;