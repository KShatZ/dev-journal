const express = require("express");
const Entry = require("../models/entry");

const getComposePage = function (req, res) {
    res.render("compose");
};

const postNewEntry = function (req, res) {
    const date = req.body.entryDate,
          title = req.body.entryTitle,
          content = req.body.entryContent;
    
    const newEntry = new Entry({
        auth: req.isAuthenticated(),
        title: title,
        date: date,
        content: content
    });

    newEntry.save(function (err) {
        if (err) {
            return (console.log(err));
        }
        res.redirect("/");
    });
};

module.exports = {getComposePage, postNewEntry};