const express = require("express");
const router = express.Router();

const entryController = require("../controllers/entryController");

router.get("/entry/:entryID", entryController);

module.exports = router;