var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/vedelopment-api-aggregator");

// module.exports.Campsite = require("./campsite.js.example");
