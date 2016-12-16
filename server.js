// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// allow cross origin requests (optional)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/************
 * DATABASE *
 ************/

var db = require('./models');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

app.get('/api', function api_index(req, res) {
  res.json({
    message: "Welcome to my personal api! Here's what you need to know!",
    documentationUrl: "https://github.com/example-username/express-personal-api/README.md", // CHANGE ME
    baseUrl: "http://YOUR-APP-NAME.herokuapp.com", // CHANGE ME
    endpoints: [

      /// GET ///

      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "Data about me"},
      {method: "GET", path: "/api/artists", description: "My favorite music artists"},
      // {method: "GET", path: "/api/projects", description: "WDI Projects"},
      // {method: "GET", path: "/api/places-lives", description: "Places I've Lived"},
      // {method: "GET", path: "/api/destinations", description: "Places I've traveled to"},
      // {method: "GET", path: "/api/television", description: "Television shows I like"},
      // {method: "GET", path: "/api/my-music", description: "My band's name and bandcamp link"},

      /// POST ///

      {method: "POST", path: "/api/artists", description: "My favorite music artists"},
      // {method: "POST", path: "/api/my-work", description: "WDI Projects"},
      // {method: "POST", path: "/api/places-lives", description: "Places I've Lived"},
      // {method: "POST", path: "/api/destinations", description: "Places I've traveled to"},
      // {method: "POST", path: "/api/television", description: "Television shows I like"},
      // {method: "POST", path: "/api/my-music", description: "My band's name and bandcamp link"},
      //////////   FUTURE GOALS - CAN THIS ONE PULL FROM ALLMUSIC API?   //////////
      // {method: "GET", path: "/api/all-music", description: "Engineering and Production credits from All Music"}
    ]
  })
});

//////////   CALCULATES TIME OF DAY   //////////
var time = function() {
  var d = new Date();
  var h = d.getHours();
  if (h<22 && h>5) {
    return true;
  } else {
    return false;
  };
  console.log(h);
};

//////////   CALCULATES AGE   //////////
var today = new Date();
var age = new Date('1983-02-10');
var timeinmilisec = today - age
var daysOld = Math.floor(timeinmilisec / (1000 * 60 * 60 * 24));
var yearsOld = Math.floor(daysOld/365);

//////////   DISPLAY EMBEDDED PROFILE INFO   //////////
app.get('/api/profile', function api_index(req, res) {
  res.json({
    name: "Laura Dean",
    githubUsername: "Vedelopment",
    githubLink: "https://github.com/Vedelopment",
    githubProfileImage: "https://avatars3.githubusercontent.com/u/22309434?v=3&u=82ee850006bb03a1a59fdf401ccd5e6735bde7b5&s=400",
    personalSiteLink: "https://vedelopment.github.io/",
    currentCity: "San Francisco",
    isWeird: true,
    isAwake: time(),
    age: yearsOld,
    familyMembers: [
      { name: 'Barbara Dean', relationship: 'mother' },
      { name: 'Philipe', relationship: 'sibling' },
      { name: 'Jeremy', relationship: 'fiance' }
    ]
  })
});

//////////   SHOW ALL ARTISTS   //////////
app.get('/api/artists', function (req, res) {
  db.Artist.find(function(err, artists) {
    if(err) {return console.log("index error" + err); }
    res.json(artists);
  });
});

//////////   SHOW ONE ARTIST   //////////
app.get('/api/artists/:id', function (req, res) {
  db.Artist.findOne({_id: req.params.id }, function(err, artistData) {
    res.json(artistsData);
  });
});

//////////   ADD ARTIST TO DATABASE   //////////
app.post('/api/artists', function (req, res) {
  console.log('artists create', req.body);
  var newArtist = new db.Artist(req.body);
  newArtist.save(function handleDBArtistSaved(err, savedTravel) {
    res.json(savedArtist);
  });
});

/**********
 * SERVER *
 **********/

// listen on the port that Heroku prescribes (process.env.PORT) OR port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
