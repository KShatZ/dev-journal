const express = require("express");
const router = express.Router();

const Entry = require("../models/entry");
const indexController = require("../controllers/indexController");


// ------ ROUTES ------
router.get("/", indexController);

module.exports = router;