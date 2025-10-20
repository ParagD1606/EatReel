const mongoose = require("mongoose");
const foodPartnerModel = require("./foodpartner.model");
const foodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    video: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    foodPartner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "FoodPartner", // use model name as string, not model variable
    },

    
});

const foodModel = mongoose.model("Food", foodSchema);

module.exports = foodModel;