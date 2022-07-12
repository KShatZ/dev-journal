const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const passport = require("../auth/passport-config");

router.route("/register")
    .get(authController.getRegisterPage)
    .post(authController.registerNewDev);

router.route("/login")
    .get(authController.getLoginPage)
    .post(authController.loginDev);

router.get("/logout", authController.logOutDev);

module.exports = router;