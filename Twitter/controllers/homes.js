//home controller!
const Post = require('../models/post')

/*
* Index Function
*/

function index(req, res){
  Post.find({},function(err, post) {
      console.log("Hit function INSIDE index");
     res.render('index', { title: 'Twitter', posts: post});
  } )
}

/*
* Create Post Function
*/

function create(req, res) {
const post = new Post(req.body);
post.save(function(err){
  res.redirect('/home');
}

);
}

/*
* Delete post Function
 */
function deletePost(req,res){
Post.findByIdAndDelete(req.params.id , function (err, docs) {
  res.redirect('/');
})
}

/*
* Export Modules
*/
module.exports = {
   index,
   create,
   deletePost,
 };
