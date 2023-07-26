const mongoose = require("mongoose");

const quotationSchema = new mongoose.Schema({
    quote: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "comment",
        }
    ],
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "like",
        }
    ]
}, {
    timestamps: true,
});

const quotationModel = mongoose.model("quotation", quotationSchema);

module.exports = quotationModel;