
const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
	{
        email: {
            type: String,
            required: true,
            trim: true,
        },
        comment: {
            type: String, 
            required: true
        },
        answer: {
             type:mongoose.Schema.Types.ObjectId, 
            ref:"Answer"
        },
        question: {
             type:mongoose.Schema.Types.ObjectId, 
            ref:"Question"
        },
	},
	{ timestamps: true }
);

module.exports = mongoose.model("comment", commentSchema);
