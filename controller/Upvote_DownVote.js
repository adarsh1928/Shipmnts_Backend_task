const Answer = require("../models/Answer");
const Questions = require("../models/Questions");



exports.Upvote = async (req, res) => {
    try {
      const { email, QuestionID } = req.body;
  
      if (!email || !QuestionID ) {
        return res.status(400).json({
          message: "Email QuestionID required",
          success: false,
        });
      }
  
      const Questionss = await Questions.findById(QuestionID);
  
      if (!Questionss) {
        return res.status(404).json({
          message: "Question Experience not found",
          success: false,
        });
      }
  
      Questionss.upvote = Questionss.upvote+1;
   

      await Questionss.save();
  
      return res.status(200).json({
        message: "Successfully updated upvote",
        Questionss,
        success: true,
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        message: "Failed to update data",
        success: false,
      });
    }
  };
  
exports.DownVote = async (req, res) => {
    try {
      const { email, QuestionID } = req.body;
  
      if (!email || !QuestionID ) {
        return res.status(400).json({
          message: "Email QuestionID required",
          success: false,
        });
      }
  
      const Questionss = await Questions.findById(QuestionID);
  
      if (!Questionss) {
        return res.status(404).json({
          message: "Question Experience not found",
          success: false,
        });
      }
  
      Questionss.downvote = Questionss.downvote-1;
   

      await Questionss.save();
  
      return res.status(200).json({
        message: "Successfully updated upvote",
        Questionss,
        success: true,
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        message: "Failed to update data",
        success: false,
      });
    }
  };
  
  exports.Upvote = async (req, res) => {
    try {
      const { email, AnswerID } = req.body;
  
      if (!email || !AnswerID  ) {
        return res.status(400).json({
          message: "Email QuestionID required",
          success: false,
        });
      }
  
      const Answerss = await Answer.findById(AnswerID);
  
      if (!Answerss) {
        return res.status(404).json({
          message: "Question Experience not found",
          success: false,
        });
      }
  
      Answerss.upvote = Answerss.upvote+1;
   

      await Answerss.save();
  
      return res.status(200).json({
        message: "Successfully updated upvote",
        Answerss,
        success: true,
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        message: "Failed to update data",
        success: false,
      });
    }
  };
  
exports.DownVote = async (req, res) => {
    try {
      const { email, AnswerID } = req.body;
  
      if (!email || !AnswerID ) {
        return res.status(400).json({
          message: "Email AnswerID required",
          success: false,
        });
      }
  
      const Answerss = await Answer.findById(AnswerID);
  
      if (!Answerss) {
        return res.status(404).json({
          message: "Question Experience not found",
          success: false,
        });
      }
  
      Answerss.downvote = Answerss.downvote-1;
   

      await Answerss.save();
  
      return res.status(200).json({
        message: "Successfully updated upvote",
        Answerss,
        success: true,
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        message: "Failed to update data",
        success: false,
      });
    }
  };
  