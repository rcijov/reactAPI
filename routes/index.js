var express = require('express');
var router = express.Router();

router.get('/', function(req,res){
	res.render('index', {name: "test test"});
});

module.exports = router;
