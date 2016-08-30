var express = require("express");
var router = express.Router();
var passport = require("passport");
var middleware = require("../middleware/index");

//var User = require("../models/user");

router.get("/", function(req, res){
    if(!req.cookies.siteVisited || req.cookies.siteVisited === false){
        res.render("initial");
    } else {
        res.render("main");
    }
});

router.post("/", function(req, res){
    res.cookie("siteVisited", true);
    res.redirect("/");
});

router.get("/about", middleware.showInitial, function(req,res){
    res.render("about");
});

router.get("/visit", middleware.showInitial, function(req,res){
    res.render("visit");
});

router.get("/login", function(req,res){
   res.render("login"); 
});

// Login Validation Route
router.post("/login", passport.authenticate("local",
    {
        successRedirect: "/",
        failureRedirect: "/login"
    }), function(req, res){
});

router.get("/logout", function(req,res){
    req.logout();
    res.redirect("/");
});

// TEMPORARY IN ORDER TO INIT ADMIN USER!
// // New User Route
// router.get("/register",function(req,res){
//     res.render("register");
// });

// router.post("/register", function(req, res){
//   var newUser = {username: req.body.username};
   
//   User.register(newUser, req.body.password, function(err, user){
//       if(err){
//           console.log(err);
//           res.redirect("back");
//       } else {
//           passport.authenticate("local")(req,res,function(){
//              res.redirect("/"); 
//           });
//       }
//   });
// });

// router.get("*",function(req,res){
//   res.redirect("/");
// });

module.exports = router;