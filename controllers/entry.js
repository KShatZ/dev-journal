const express = require("express");
const Entry = require("../models/entry");

const getEntry = function (req, res) {
    
    const entryID = req.params.entryID;
    const dateOptions = {year:"numeric", month:"long", day:"numeric"};
  
    Entry.findById(entryID, async function(err, entry){
        if (err) {
            return console.log(err);
        } 

        entry =  await entry.populate("developer");
        res.render("entry", {
            auth: req.isAuthenticated(),
            path: req.path,
            developer: entry.developer,
            title: entry.title,
            date: entry.date.toLocaleString("en-us", dateOptions),
            content: entry.content
        });
    });
}

module.exports = getEntry;