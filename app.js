//PACKAGE Requirements
var methodOverride = require("method-override"),
     LocalStrategy = require("passport-local"),
        bodyParser = require("body-parser"),
          passport = require("passport"),
          mongoose = require("mongoose"),
           express = require("express");

// Middleware Requirements
var middleware = require("./middleware/index");

// App Decloration   
var app = express();

// SCHEMA Requirements
var User = require("./models/user");

// Passport
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

// Middleware
app.use(middleware.useStar);
app.use(middleware.useAuthorizedUser);
app.use(middleware.useMoment);

// DATABASE CONNECTION
mongoose.connect("mongodb://localhost/fourteenthstar");

// APP SETS
app.set("view engine","ejs");

// APP USES
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));

// Routes
var indexRoutes = require("./routes/index");
var eventRoutes = require("./routes/events");
var beerRoutes = require("./routes/beer");
   app.use(indexRoutes);
   app.use("/events",eventRoutes);
   app.use("/beer",beerRoutes);

//Temporary Requirements
//  var seedDB = require("./seeds");
//  seedDB();

app.listen(process.env.PORT,process.env.IP,function(){
   console.log("The server has started...");
});