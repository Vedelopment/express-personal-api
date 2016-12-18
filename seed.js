// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var projects_list = [
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
    description: "A simple tic tac toe game with neveau hipster style so your style blends right in with the game like the quircky wallflower that you are.",
    image: "images/ticTacToe.png",
    url: "http://sharp-shooter-amy-54171.bitballoon.com/",
  },
  ];

db.Project.remove({}, function(err, projects){
  if(err) {
    console.log('Error occurred in remove', err);
  } else {
    console.log('removed all projects');

    // create new records based on the array books_list
    db.Project.create(projects_list, function(err, projects){
      if (err) { return console.log('err', err); }
      console.log("created", projects.length, "projects");
      process.exit();
    });
  }
});
