//home controller!
const Post = require('../models/post')

function index(req, res){
  Post.find({},function(err, post) {
      console.log("Hit function INSIDE index");
     res.render('index', { title: 'Twitter', posts: post});
  } )
}


function create(req, res) {
const post = new Post(req.body);
post.save(function(err){
  res.redirect('/home');
}

);
}


function deletePost(req,res){

// working
Post.findByIdAndDelete(req.params.id , function (err, docs) {
  res.redirect('/');
})












}
module.exports = {
   index,
   create,
   deletePost,
 };
