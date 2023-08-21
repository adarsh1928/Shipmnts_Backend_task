const Answer = require("../models/Answer");
const Comments = require("../models/Comments");
const Questions = require("../models/Questions");

exports.addCommentToQuestion = async (req, res) => {
    try {
        const { email, content,QuestionID } = req.body;

        if (!email  || !content || !QuestionID ) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }
        const existing=await User.findOne({email});

        if(!existing){
           return res.status(200).json({
                message:"You are Not in login",
            })
        }

        const ques=await Questions.findOne({QuestionID});

        if(!ques){
            return res.status(200).json({
                 message:"Ques not exist",
             })
         }

        const que = new Comments({
            email,
            comment:content,
        });

        await que.save();

        return res.status(200).json({
            success: true,
            message: "Successfully added the data"
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Error while adding Questions data"
        });
    }
};

exports.addCommentToAnswer = async (req, res) => {
    try {
        const { email, content,answerID } = req.body;

        if (!email  || !content ||answerID ) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }
        const existing=await User.findOne({email});

        if(!existing){
           return res.status(200).json({
                message:"You are Not in login",
            })
        }

        const anss=await Answer.findOne({answerID});

        if(!anss){
            return res.status(200).json({
                 message:"Ques not exist",
             })
         }

        const ans = new Comments({
            email,
            comment:content,
        });

        await ans.save();

        return res.status(200).json({
            success: true,
            message: "Successfully added the data"
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Error while adding Questions data"
        });
    }
};
