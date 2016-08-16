var mongoose = require("mongoose");

var BeerSchema = new mongoose.Schema({
	name: String,
	image: String,
	ibu: String,
	abv: String,
	style: String,
	availability: String,
	description: String
});

module.exports = mongoose.model("Beer",BeerSchema);