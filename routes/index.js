const express = require('express');
const siteRouter = require('./siteRouter')
const adminRouter = require('./adminRouter');
const router = express.Router();

router.use('/', siteRouter);
router.use('/admin', adminRouter);

module.exports = router;