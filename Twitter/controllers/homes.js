//home controller!
const Post = require('../models/post')

function index(req, res){
  console.log("Hit function index");
  Post.find({},function(err, res) {
      console.log("Hit function INSIDE index");
    // res.render('index', { title: 'Twitter'});
    res.send("home")
  } )
}


function create(req, res) {

console.log(req.body);

const post = new Post(req.body);

post.save(function(err){
  res.redirect('/home');
}

);
}

module.exports = {
   index,
   create
 };
