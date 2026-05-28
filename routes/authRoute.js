const { renderRegister, renderLogin } = require('../controller/authController');

const router = require('express').Router();

router.route("/register").get(renderRegister);
router.route("/login").get(renderLogin);


module.exports = router;