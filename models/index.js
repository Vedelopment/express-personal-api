var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/vedelopment-api-aggregator");

module.exports.Artist = require("./artists.js");
