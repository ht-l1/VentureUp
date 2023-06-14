const express = require('express');
const siteRouter = require('./siteRouter')
const adminRouter = require('./adminRouter');
const router = express.Router();

router.use('/', siteRouter);
// router.get('/', (req, res) => {
//     res.render('index'); // Render the "index.ejs"
//   });

router.use('/admin', adminRouter);

module.exports = router;