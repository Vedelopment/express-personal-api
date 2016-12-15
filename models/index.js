var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/hidden-chamber-85739");

// module.exports.Campsite = require("./campsite.js.example");
