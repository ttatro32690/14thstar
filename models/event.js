var mongoose = require("mongoose");

var EventSchema = new mongoose.Schema({
	name: String,
	image: String,
	location: String,
	date: Date,
	beginTm: String,
	endTm: String,
	description: String
});

module.exports = mongoose.model("Event",EventSchema);