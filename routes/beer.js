var express = require("express");
var router = express.Router();
var Beer = require("../models/beer");
var middleware = require("../middleware/index");

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
router.get("/new", middleware.isLoggedIn, function(req,res){
	res.render("beer/new");
});

//CREATE Route
router.post("/", function(req,res){
	Beer.create(req.body.beer, middleware.isLoggedIn, function(err, beer){
	if(err){
		console.log(err);
	} else {
		console.log("Creating a new beer");
		res.redirect("/beer");
	}
	});
});

//SHOW Route
router.get("/:id",function(req,res){
	Beer.findById(req.params.id,function(err,beer){
	if(err){
		res.redirect("back");		
	} else {
		res.render("beer/show", {beer: beer});
	}
	});
});

//EDIT Route
router.get("/:id/edit", middleware.isLoggedIn, function(req,res){
	
	Beer.findById(req.params.id, function(err, beer){
		if(err){
			res.redirect("back");
		} else {
			res.render("beer/edit", {beer: beer});
		}
	});
});

//UPDATE ROUTE
router.put("/:id/", middleware.isLoggedIn, function(req, res){
    Beer.findByIdAndUpdate(req.params.id, req.body.beer, function(err, beer){
       if(err){
           console.log(err);
           res.redirect("/");
       } else {
           res.redirect("/beer/" + req.params.id);
       }
    });
});

//DESTROY Route
router.delete("/:id", middleware.isLoggedIn, function(req,res){
	Beer.findByIdAndRemove(req.params.id,function(err){
		if(err){
			console.log(err);
		} else {
			res.redirect("/beer");
		}
	});
});

module.exports = router;