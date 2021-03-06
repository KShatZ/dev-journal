const express = require("express");
const router = express.Router();
const composeController = require("../controllers/compose");

router.route("/compose")
  .get(composeController.getComposePage)
  .post(composeController.postNewEntry);

module.exports = router;