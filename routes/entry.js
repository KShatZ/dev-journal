const express = require("express");
const router = express.Router();
const Entry = require("../models/entry");

router.get("/entry/:entryID", function(req, res){
  
    const postID = req.params.entryID;
    const dateOptions = {year:"numeric", month:"long", day:"numeric"};
  
    Entry.findById(postID, function(err, entry){
  
      console.log(entry);
  
      res.render("post", {
        title: entry.title,
        date: entry.date.toLocaleString("en-us", dateOptions),
        content: entry.content
      });
  
    });
  
});

module.exports = router;