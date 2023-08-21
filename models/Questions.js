
const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema(
	{
        email: {
            type: String,
            required: true,
            trim: true,
        },
        questions: [{
            type: String, 
            required: true
        }],
        comments:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"comment",
        }],
        upvote:{
            type:Number,
            default: 0, 
        },
        downvote:{
           type:Number,
           default: 0, 
        },
        answers: [{
             type:mongoose.Schema.Types.ObjectId, 
            ref:"Answer"
        }],
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Question", QuestionSchema);
