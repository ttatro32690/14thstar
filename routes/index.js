var express = require("express");
var router = express.Router();

router.get("/",function(req,res){
    res.render("main");
});

router.get("/about",function(req,res){
    res.render("about");
});

router.get("/visit",function(req,res){
    res.render("visit");
});

// router.get("*",function(req,res){
//   res.redirect("/");
// });

module.exports = router;