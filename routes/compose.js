const express = require("express");
const router = express.Router();
const Entry = require("../models/entry");

router.get("/compose", function(req, res){
  
    res.render("compose");
  
});

router.post("/compose", function(req, res){

    // Grab Data from POST request
    const entryDate = req.body.dateInput;
    const entryTitle = req.body.titleInput;
    const entryContent = req.body.postInput;
  
    console.log(entryDate);
  
    const newEntry = new Entry({
      title: entryTitle,
      date: entryDate,
      content: entryContent
    });
    newEntry.save();
  
    res.redirect("/");
    
});

module.exports = router;