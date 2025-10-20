const mongoose = require("mongoose");

const userSchems = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
    },
}, { timestamps: true });

const userModel = mongoose.model("user", userSchems);
module.exports = userModel;  