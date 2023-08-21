I had completed the Task 1 of backend which is stackoverflow backend

# StackOverflow Clone Backend

This is the backend component of a StackOverflow clone project. It provides a RESTful API to manage users, questions, answers, and other related features.


## Features

### User Management

- **Create User**: Users can register themselves on the system.

### Question Management

- **Create Questions**: Registered users can create new questions.
- **Update Questions**: Users can update their own questions.
- **Delete Questions**: Users can delete their own questions.
- **All Questions**: Retrieve a list of all questions.

### Voting System

- **Votes**: Implementing a voting system for questions and answers, allowing users to upvote and downvote.

### Commenting System

- **Comments**: Implementing a commenting system for questions and answers, allowing users to leave comments.

## API Endpoints


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

