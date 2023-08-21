const mongoose = require("mongoose");
const Questions = require("../models/Questions");

exports.addQuestion = async (req, res) => {
    try {
        const { email, Question } = req.body;

        if (!email || !Question ) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }
        const existing=await Questions.findOne({email});

        if(existing){
           return res.status(200).json({
                message:"You are already in our request",
                // existing
            })
        }
        const QuestionsDetail = new Questions({
            email,
            questions,
        });

        await QuestionsDetail.save();

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

exports.editQuestion = async (req, res) => {
    try {
      const { email, QuestionID ,Question} = req.body;
  
      if (!email || !QuestionID || !Question) {
        return res.status(400).json({
          message: "Email, Question and QuestionID required",
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
  
      Questionss.questions = Question;
   

      await Questionss.save();
  
      return res.status(200).json({
        message: "Successfully updated my intern exp data",
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

  
exports.deleteQuestion=async (req,res)=>{
     try{
        const {email,QuestionID}=req.body;

       if(!email || !QuestionID){
        return res.status(400).json({
            message:"Email Required For delete Question ",
            success:false,
        })
       }
     
       const myQuestionExp=await Questions.findByIdAndDelete(
          QuestionID,
       )
     
       
    await myQuestionExp.save()
       return res.status(200).json({
        message:"succesfully delete question data",
        myQuestionExp,
        success:true,
       })
     }catch(err){
        return res.status(504).json({
            message:"failed to delete data",
            success:true
        })
     }
}

exports.getQuestions=async (req,res)=>{
    try{
       const {email}=req.body;

      if(!email){
       return res.status(400).json({
           message:"Email Required For getting Questions",
           success:false,
       })
      }
    
      const myQuestionExp=await Questions.find(
       {email:email}
      )

      return res.status(200).json({
       message:"succesfully Got my intern exp data",
       myQuestionExp,
       success:true,
      })
    }catch(err){
       return res.status(504).json({
           message:"failed to get data",
           success:true
       })
    }
}