//PACKAGE Requirements
var methodOverride = require("method-override"),
     LocalStrategy = require("passport-local"),
        bodyParser = require("body-parser"),
          passport = require("passport"),
          mongoose = require("mongoose"),
           express = require("express"),
            moment = require("moment");

// APP DECLARATION    
var app = express();

// SCHEMA Requirements
var User = require("./models/user");
var Star = require("./models/star");

app.use(require("express-session")({
    secret: "annie is the best dog",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

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

app.use(function(req, res, next){
    res.locals.admin = req.user;
    next();
});

//DATABASE CONNECTION
mongoose.connect("mongodb://localhost/fourteenthstar");

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

// Temporary Requirements
//  var seedDB = require("./seeds");
//  seedDB();

app.listen(process.env.PORT,process.env.IP,function(){
   console.log("The server has started...");
});