var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ArtistSchema = new Schema({
  name: String,
  image: String,
  genre: String,
  soloArtist: Boolean,
  favoriteAlbum: String,
  alive: Boolean,

});

var Artist = mongoose.model('Artist', ArtistSchema);

module.exports = Artist;
