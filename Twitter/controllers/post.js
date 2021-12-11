const Post = require('../models/post');

function addComment(req, res) {

  Post.findById(req.params.id , function(err, post) {
    console.log(req.body);
    post.comments.push(req.body)

    post.save( function(err) {
    console.log("saving to Post");
    // if (err) res.send(err)
    console.log("saved!");
    res.redirect(`/${req.params.id}`)
  } )
  })





  // res.send('you added a comment');


}

function show(req, res) {
  Post.findById(req.params.id,function(err, post) {
  res.render('post/show', {title : "Twitter" , post});
  })
 }

module.exports = {
   show,
   addComment
 };
