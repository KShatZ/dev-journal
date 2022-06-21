const express = require("express");
const router = express.Router();

const endPoints = ["/my-entries", "/profile", "/privacy-policy", "/terms-conditions", "/google", "/facebook"]

router.all(endPoints, function (req, res) {
    res.render("coming-soon", {
        auth: req.isAuthenticated(),
        path: req.path
    });
});

module.exports = router;