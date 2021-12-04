//home controller!

function index(req, res){
res.render('index', { title: 'Twitter' });
}

module.exports = {
   index
 };
