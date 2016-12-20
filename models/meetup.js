var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var MeetupSchema = new Schema({
  meetup_name: String,
  location: String,
  description: String,
  image: String,
  url: String,
});

var Meetup = mongoose.model('Meetup', MeetupSchema);

module.exports = Meetup;
