const filter = require("./utils/filter");
const Entry = require("../models/entry");

const displayEntries = async function (req, res) {

    const filterOption = req.query.date_filter;

    if (filterOption === "asc") {
        try {
            const entries = await filter.oldToNew(Entry);
            res.render("home", {
                auth: req.isAuthenticated(),
                newest: "",
                oldest: "selected",
                entries: entries
            });
        } catch (err) {
            console.log(err);
        }
    } else {
        try {
            const entries = await filter.newToOld(Entry);
            res.render("home", {
                auth: req.isAuthenticated(),
                newest: "selected",
                oldest: "",
                entries: entries
            });
        } catch (err) {
            console.log(err);
        } 
    } 
}

module.exports = displayEntries;