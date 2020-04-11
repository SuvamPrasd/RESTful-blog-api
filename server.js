const {getComments, addComments, updateComments, deleteComments} = require('./comments');
const {getPosts, addPosts, updatePosts, deletePosts} = require('./posts');

const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const errorHandler = require('error-handler');

const app = express();
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(errorHandler);

app.route('/posts').get(getPosts).post(addPosts);
app.route('/posts/:postId').put(updatePosts).delete(deletePosts);

app.route('/posts/:postId/comments').get(getComments).post(addComments);
app.route('/posts/:postId/comments/:commentId').put(updateComments).delete(deleteComments);

app.listen(3000);