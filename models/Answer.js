// Import the Mongoose library
const mongoose = require("mongoose");

const AnswerSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            trim: true,
        },
        question: {
            type: mongoose.Schema.Types.ObjectId,
            ref:"Question",
        },
        Answer: {
            type: String,
            required: true
        },
        upvote: {
            type: Number,
            default: 0, 
        },
        downvote: {
            type: Number,
            default: 0, 
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Answer", AnswerSchema);
