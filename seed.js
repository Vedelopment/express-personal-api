// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');
var meetupModel = require('./models/meetup.js');

var projects_seed = [
  {
    student_name: "LD Dean",
    project_name: "Personal Portfolio",
    description: "Get to know me, my work and how I create create unique solutions for my clients' users.",
    image: "images/vedelopmentPortfolio.png",
    url: "https://vedelopment.github.io/",
  },
  {
    student_name: "LD Dean",
    project_name: "Save The Enterprise! Game",
    description: "Only you can save the Enterprise ship and her crew by correctly guessing the captain's password!",
    image: "images/starTrekGame.png",
    url: "http://save-the-enterprise.bitballoon.com/",
  },
  {
    student_name: "LD Dean",
    project_name: "Tic Tac Toe",
    description: "A simple tic tac toe game with neveau hipster style so you blend right in with the game like the quirky wallflower that you are.",
    image: "images/ticTacToe.png",
    url: "http://sharp-shooter-amy-54171.bitballoon.com/",
  },
  ];

var meetups_seed = [
  {
    meetup_name: "Developer Week 2017 Hackathon",
    location: "San Francisco",
    description: "The DeveloperWeek 2016 Hackathon is San Francisco's largest hackathon. There will be 1,200 plus developers builidng new apps within 33 hours. Participants can build any app of their choice and will compete for $100,000+ in cash, products and prizes.",
    image: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F24755298%2F30266753513%2F1%2Foriginal.jpg?w=800&rect=0%2C171%2C2048%2C1024&s=04a4926d8915cfb717931801aa62a364",
    url: "https://www.eventbrite.com/e/developerweek-2017-hackathon-tickets-28375061573?aff=es2",
  },
  {
    meetup_name: "a",
    location: "a",
    description: "a",
    image: "a",
    url: "a",
  },
  {
    meetup_name: "a",
    location: "a",
    description: "a",
    image: "a",
    url: "a",
  },
  ];

db.Project.remove({}, function(err, projects){
  if(err) {
    console.log('Error occurred in remove', err);
  } else {
    console.log('removed all projects');

    // create new records based on the array projects_seed
    db.Project.create(projects_seed, function(err, projects){
      if (err) { return console.log('err', err); }
      console.log("created", projects.length, "projects");
      process.exit();
    });
  }
});

meetupModel.remove({}, function(err, meetups){
  if(err) {
    console.log('Error occurred in remove', err);
  } else {
    console.log('removed all meetups');

    // create new records based on the array meetups_seed
    meetupModel.create(meetups_seed, function(err, meetups){
      if (err) { return console.log('err', err); }
      console.log("created", meetups.length, "meetups");
      process.exit();
    });
  }
});
