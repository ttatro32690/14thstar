var middlewareObj = {};
var moment = require("moment");
var Star = require("../models/star");

//MIDDLEWARE

middlewareObj.isLoggedIn = function isLoggedIn(req,res,next){
	if(req.isAuthenticated()){
		return next();
	} else {
		res.redirect("back");
	}
};

middlewareObj.useStar = function useStar(req,res,next){
    Star.findOne({},function(err, foundStar){
        if(err){
            console.log(err);
            res.redirect("/");
        } else {
            res.locals.star = foundStar;
            next();
        }
    });
};

middlewareObj.useMoment = function useMoment(req,res,next){
   res.locals.moment = moment; 
   next();
};

middlewareObj.useAuthorizedUser = function useAuthorizedUser(req, res, next){
    res.locals.admin = req.user;
    next();
};

module.exports = middlewareObj;