const Post = require('../models/post');



// Post.find({},function(err, post) {
//     console.log("Hit function INSIDE index");
//    res.render('index', { title: 'Twitter', posts: post});
// } )



function show(req, res) {
  Post.findById(req.params.id,function(err, post) {
  res.render('post/show', {title : "Twitter" , post});
  })



}

module.exports = {
   show
 };
