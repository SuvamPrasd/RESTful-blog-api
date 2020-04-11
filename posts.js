let {store} = require('./index.js');

module.exports = {
    getPosts(req,res){
        res.status(200).send(store.posts);
    },
    addPosts(req,res){
        let newPost = req.body;
        let pid = store.posts.length;
        store.posts.push(newPost);
        res.status(201).send({id: pid});
    },
    updatePosts(req,res){
        store.posts[req.params.postId] = req.body;
        res.status(200).send(store.posts[req.params.postId]);
    },      
    deletePosts(req,res){
        store.posts.splice(req.params.postId);
        res.status(204).send();
    }
}