var express = require("express");
var router = express.Router();
var Beer = require("../models/beer");

//INDEX Route
router.get("/",function(req,res){
	Beer.find({},function(err, beers){
		if(err){
			console.log(err);
			res.redirect("/");
		} else {
			res.render("beer",{beers: beers});
		}
	});
});

//NEW Route
router.get("/new",function(req,res){
	res.render("beer/new");
});

//CREATE Route
router.post("/", function(req,res){
	res.redirect("beer");
});

//SHOW Route
router.get("/beer/:id",function(req,res){
	res.send("Not Setup Yet");
});

//EDIT Route
router.get("/beer/:id/edit",function(req,res){
	res.send("Not Setup Yet");
});

//UPDATE Route
router.put("/beer/:id",function(req,res){
	res.send("Not Setup Yet");
});

//DESTROY Route
router.delete("/beer/:id",function(req,res){
	res.send("Not Setup Yet");
});

module.exports = router;