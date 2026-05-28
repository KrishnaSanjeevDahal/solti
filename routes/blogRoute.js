const { home, renderCreateBlog, renderBLogs } = require('../controller/blogController');

const router = require('express').Router();


router.route('/').get(home);
router.route("/createblog").get(renderCreateBlog);
router.route("/allblogs").get(renderBLogs);


module.exports = router;