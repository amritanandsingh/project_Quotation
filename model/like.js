const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    quotation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "quotation",
    }
}, {
    timestamps: true,
});

const likeModel = mongoose.model("like", likeSchema);

module.exports = likeModel;