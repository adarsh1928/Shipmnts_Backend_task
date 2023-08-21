// Import the Mongoose library
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
	{
		firstName: {
			type: String,
			required: true,
			trim: true,
		},
		lastName: {
			type: String,
			required: true,
			trim: true,
		},
        Questions: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Question",
          }],
          answers: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Answer",
          }],

		email: {
			type: String,
			required: true,
			trim: true,
		},
		
		password: {
			type: String,
			required: true,
		},
        token: {
			type: String,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("user", userSchema);