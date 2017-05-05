var express = require('express');
var router = express.Router();

/* GET home page. */
var homepageController = function (req, res) {     
  res.render('index', { title: 'Express' });       
};                                                 
/* GET home page. */
//router.get('/', homepageController); 
var ctrlOthers = require('../controllers/others');  
/* GET home page. */
router.get('/', ctrlOthers.about);     

module.exports = router;
