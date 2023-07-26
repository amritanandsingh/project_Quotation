const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    comment: {
        type: String,
        required: true,
    },
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

const commentModel = mongoose.model("comment", commentSchema);

module.exports = commentModel;