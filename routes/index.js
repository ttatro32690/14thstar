var express = require("express");
var router = express.Router();
var passport = require("passport");
//var User = require("../models/user");

router.get("/",function(req,res){
    res.render("main");
});

router.get("/about",function(req,res){
    res.render("about");
});

router.get("/visit",function(req,res){
    res.render("visit");
});

router.get("/login", function(req,res){
   res.render("login"); 
});

// Login Validation Route
router.post("/login",passport.authenticate("local",
    {
        successRedirect: "/",
        failureRedirect: "/login"
    }), function(req, res){
});

router.get("/logout",function(req,res){
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