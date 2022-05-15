const mongoose = require("mongoose");

const devSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    hash: {
        type: String,
        required: true
    },
    salt: {
        type: String,
        required: true
    }
});

const Dev = mongoose.model("Dev", devSchema);
module.exports = Dev;