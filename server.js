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

// var db = require('./models');

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
  // TODO: Document all your api endpoints below
  res.json({
    woopsIForgotToDocumentAllMyEndpoints: true, // CHANGE ME ;)
    message: "Welcome to my personal api! Here's what you need to know!",
    documentationUrl: "https://github.com/example-username/express-personal-api/README.md", // CHANGE ME
    baseUrl: "http://YOUR-APP-NAME.herokuapp.com", // CHANGE ME
    endpoints: [
      /// GET ///
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "Data about me"},
      {method: "GET", path: "/api/projects", description: "WDI Projects"},
      {method: "GET", path: "/api/places-lives", description: "Places I've Lived"},
      {method: "GET", path: "/api/destinations", description: "Places I've traveled to"},
      {method: "GET", path: "/api/television", description: "Television shows I like"},
      {method: "GET", path: "/api/music", description: "My favorite music artists"},
      {method: "GET", path: "/api/my-music", description: "My band's name and bandcamp link"},
      /// POST ///
      {method: "POST", path: "/api/my-work", description: "WDI Projects"},
      {method: "POST", path: "/api/places-lives", description: "Places I've Lived"},
      {method: "POST", path: "/api/destinations", description: "Places I've traveled to"},
      {method: "POST", path: "/api/television", description: "Television shows I like"},
      {method: "POST", path: "/api/music", description: "My favorite music artists"},
      {method: "POST", path: "/api/my-music", description: "My band's name and bandcamp link"},
      /// FUTURE GOALS - CAN THIS ONE PULL FROM ALL MUSIC API? ///
      {method: "GET", path: "/api/all-music", description: "Engineering and Production credits from All Music"}
    ]
  })
});
app.get('/profile', function api_index(req, res) {
  // TODO: Document all your api endpoints below
  res.json({
    name: "Laura Dean",
    githubLink: "https://github.com/Vedelopment",
    currentCity: "San Francisco",
    isWeird: true,
    familyMembers: [
      { name: 'Barbara Dean', relationship: 'mother' },
      { name: 'Philipe', relationship: 'sibling' }
      { name: 'Jeremy', relationship: 'fiance' }
    ]
  }

/**********
 * SERVER *
 **********/

// listen on the port that Heroku prescribes (process.env.PORT) OR port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
