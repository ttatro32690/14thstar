var express = require("express");
var router = express.Router();

//INDEX Route
router.get("/",function(req,res){
	res.render("beer");	
});

//NEW Route
//CREATE Route
//SHOW Route
//EDIT Route
//UPDATE Route
//DESTROY Route

module.exports = router;