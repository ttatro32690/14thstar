var middlewareObj = {};

//MIDDLEWARE

middlewareObj.isLoggedIn = function isLoggedIn(req,res,next){
	if(req.isAuthenticated()){
		return next();
	} else {
		res.redirect("back");
	}
};

module.exports = middlewareObj;