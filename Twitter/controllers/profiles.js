
//Profile controller!
function show(req, res){
res.render('profile', { title: 'Twitter' });
}


/*
* Export Modules
*/
module.exports = {
   show
 };
