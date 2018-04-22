const express = require('express');
const userController = require('./user-controller');
const userRouter = express.Router();

userRouter.get('/', userController.getAllUsers);
userRouter.get('/:userId', userController.getUser);
userRouter.get('/:userId/comments', userController.getAllUserComments);
userRouter.get('/:userId/comments/:commentId', userController.getCommentForUser);

module.exports = userRouter;
