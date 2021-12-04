var express = require('express');
var router = express.Router();
let indexCtrl = require('../controllers/homes')
let exploreCtrl = require('../controllers/explores')
let profileCtrl = require('../controllers/profiles')

/* GET blank page. */
router.get('/', function(req, res, next) {
  res.redirect('/home');
});

// GET Home page
router.get('/home', indexCtrl.index);

// GET Explore page
router.get('/explore', exploreCtrl.show);

// GET profile  page
router.get('/profile', profileCtrl.show);

// POST a post from home?
router.post('/home', indexCtrl.create );




module.exports = router;
