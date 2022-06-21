const express = require("express");
const router = express.Router();

const entryController = require("../controllers/entry");

router.get("/entry/:entryID", entryController);

module.exports = router;