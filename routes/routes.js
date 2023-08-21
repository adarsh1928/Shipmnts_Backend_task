const express = require("express"); 
const { signup, login } = require("../controller/Auth");
const { addQuestion, editQuestion, deleteQuestion, getQuestions } = require("../controller/Questions");
const { UpvoteAnswer, DownVoteAnswer, UpvoteQuestion, DownVoteQuestion } = require("../controller/Upvote_DownVote");
const { addCommentToQuestion, addCommentToAnswer } = require("../controller/Comments");

const router = express.Router();

router.post("/signup", signup);
 router.post("/login", login);


 router.post("/addQuestion", addQuestion);
 router.post("/editQuestion", editQuestion);
 router.post("/deleteQuestion", deleteQuestion);
 router.post("/getQuestions", getQuestions);


 router.post("/addCommentToQuestion", addCommentToQuestion);
 router.post("/addCommentToAnswer", addCommentToAnswer);



 router.post("/UpvoteAnswer", UpvoteAnswer);
 router.post("/DownVoteAnswer", DownVoteAnswer);
 router.post("/UpvoteQuestion", UpvoteQuestion);
 router.post("/DownVoteQuestion", DownVoteQuestion);


module.exports = router;


