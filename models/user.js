const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    userID: String,
});

module.exports = mongoose.model("users", userSchema);