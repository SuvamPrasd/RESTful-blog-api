let {store} = require('./index.js');

module.exports = {
    getComments(req,res){
        res.status(200).send(store.post[req.params.postId].comments);
    },
    addComments(req,res){
        let newComment = req.body;
        let cid = store.posts[req.params.postId].comments.length;
        store.posts[req.params.postId].comments.push(newComment);
        res.status(201).send(store.posts[req.params.postId]);
    },
    updateComments(req,res){
        store.posts[req.params.postId].comments[req.params.commentId] = req.body;
        res.status(200).send(store.posts[req.params.postId].comments[req.params.commentId]);
    },
    deleteComments(req,res){
        store.posts[req.params.postId].comments.splice(req.params.commentId);
        res.status(204).send();
    }
}