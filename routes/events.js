var express = require("express");
var router = express.Router();
var Event = require("../models/event");

//INDEX ROUTE
router.get("/",function(req,res){
    Event.find({},function(err,events){
        if(err){
            console.log(err);
        } else {
            res.render("events/index",{events: events});
        }
    });
});

//NEW ROUTE
router.get("/new",function(req,res){
   res.render("events/new");
});

//CREATE ROUTE
router.post("/",function(req,res){
    Event.create(req.body.event,function(err,newEvent){
        if(err){
            console.log(err);
            res.redirect("/events");
        } else {
            res.redirect("/events");
        }
    });
});

//SHOW ROUTE

router.get("/:id",function(req,res){
   Event.findById(req.params.id,function(err,foundEvent){
       if(err){
           console.log(err);
           res.redirect("/");
       } else {
           res.render("events/show",{event: foundEvent});
       }
   });
});

//EDIT ROUTE
router.get("/:id/edit",function(req,res){
   Event.findById(req.params.id,function(err,foundEvent){
      if(err){
          console.log(err);
          res.redirect("/");
      } else {
          res.render("events/edit",{event: foundEvent});
      }
   });
});

//UPDATE ROUTE
router.put("/:id",function(req, res){
    Event.findByIdAndUpdate(req.params.id, req.body.event, function(err, event){
       if(err){
           console.log(err);
           res.redirect("/");
       } else {
           res.redirect("/events/" + req.params.id);
       }
    });
});

//DESTROY ROUTE
router.delete("/:id",function(req, res){
   Event.findByIdAndRemove(req.params.id, function(err){
      if(err){
          res.redirect("/events");
      } else {
          res.redirect("/events");
      }
   });
});

module.exports = router;