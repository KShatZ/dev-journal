const mongoose = require("mongoose");

const entrySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    developer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Dev",
        required: true
    }
});

const Entry = mongoose.model("Entry", entrySchema);
module.exports = Entry;