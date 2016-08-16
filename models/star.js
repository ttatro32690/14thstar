var mongoose = require("mongoose");

var StarSchema = new mongoose.Schema({
    name: String,
    motto: String,
    about: [String],
    street: String,
    apartment: String,
    city: String,
    state: String,
    postal: Number,
    phone: String,
    email: String,
    openTime: String,
    closeTime: String,
    openDays: [String],
    logo: String,
    thumbnail: String,
    twitterUrl: String,
    facebookUrl: String,
    instaUrl: String
});

module.exports = mongoose.model("Star",StarSchema);