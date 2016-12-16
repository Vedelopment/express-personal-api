// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var artists_list = [
  {
  name: "Scott Walker",
  image: "http://ksassets.timeincuk.net/wp/uploads/sites/55/2016/07/2014ScottWalker_Press_020714-1.jpg",
  genre: "Experimental",
  soloArtist: true,
  favoriteAlbum: "The Drift",
  alive: true
  },
  name: "The Pharcyde",
  image: "https://ichef.bbci.co.uk/images/ic/960x540/p01bqp2z.jpg",
  genre: "Alternative Hip-Hop",
  soloArtist: false,
  favoriteAlbum: "Bizarre Ride II",
  alive: true
  },
];

db.Artist.remove({}, function(err, artists){
  if(err) {
    console.log('Error occurred in remove', err);
  } else {
    console.log('removed all artists');

    // create new records based on the array books_list
    db.Artist.create(artists_list, function(err, artists){
      if (err) { return console.log('err', err); }
      console.log("created", artists.length, "artists");
      process.exit();
    });
  }
});
