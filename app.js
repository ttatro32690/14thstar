//PACKAGE Requirements
var methodOverride = require("method-override"),
        bodyParser = require("body-parser"),
          mongoose = require("mongoose"),
           express = require("express"),
            moment = require("moment");

// APP DECLARATION    
var app = express();

//DATABASE CONNECTION
mongoose.connect("mongodb://localhost/fourteenthstar");

// SCHEMA Requirements
var Star = require("./models/star");

// // Temporary Requirements
// var seedDB = require("./seeds");
// seedDB();

//MIDDLEWARE
app.use(function(req,res,next){
    Star.findOne({},function(err, foundStar){
        if(err){
            console.log(err);
            res.redirect("/");
        } else {
            res.locals.star = foundStar;
            next();
        }
    });
});

app.use(function(req,res,next){
   res.locals.moment = moment; 
   next();
});

// APP SETS
app.set("view engine","ejs");

// APP USES
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));

var indexRoutes = require("./routes/index");
var eventRoutes = require("./routes/events");
var beerRoutes = require("./routes/beer");
//-EXTERNAL ROUTES
   app.use(indexRoutes);
   app.use("/events",eventRoutes);
   app.use("/beer",beerRoutes);

app.listen(process.env.PORT,process.env.IP,function(){
   console.log("The server has started...");
});