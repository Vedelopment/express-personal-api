console.log("Sanity Check: JS is working!");

$(document).ready(function(){

var projectTemplate = $('#project-template').html();
var meetupTemplate = $('#meetup-template').html();
var compiledProjectTemplate = Handlebars.compile(projectTemplate);
var compiledMeetupTemplate = Handlebars.compile(meetupTemplate);
var template;
var  allProjects = [];

$.ajax({
method: 'GET',
url: '/api/projects',
success: handleProjectsSuccess,
error: handleError
});

$.ajax({
method: 'GET',
url: '/api/meetups',
success: handleMeetupsSuccess,
error: handleError
});

//////////   HANDLE PROJECTS SUCCESS AND RENDER PROJECTS   //////////

function handleProjectsSuccess(json) {
  console.log('success!');
  allProjects = json;
  renderProjects();
}

function renderProjects () {
  // empty existing posts from view
  $('#project-list').empty();

  // pass `allBooks` into the template function
  var projectsHtml = compiledProjectTemplate({ project: allProjects });

  // append html to the view
  $('#project-list').append(projectsHtml);
};

//////////   HANDLE MEETUPS SUCCESS AND RENDER MEETUPS   //////////

function handleMeetupsSuccess(json) {
  console.log('success!');
  allMeetups = json;
  renderMeetups();
}

function renderMeetups () {
  // empty existing posts from view
  $('#meetup-list').empty();

  // pass `allBooks` into the template function
  var meetupsHtml = compiledMeetupTemplate({ meetup: allMeetups });

  // append html to the view
  $('#meetup-list').append(meetupsHtml);
};

function handleMeetupsSuccess(json) {
  console.log('success!');
  allProjects = json;
  renderMeetups();
}

//////////   HANDLE ERROR   //////////

function handleError(e) {
  console.log('Failed to load data, is the server working?');
}

// AUDIO //
  function playProcessing() {
    compAudio.play();
  }
// SHOW/HIDE MENUS + AUDIO PLAY //
  $('.list-anim').click(function showProjectsList() {
    // var thisId = ($(this).attr('id'));
    // if (thisId == "projects") {
    // }
    $(this).find('ul').toggleClass('list-show');
    $(this).find('span').toggleClass('typewriter');
    if ($(this).find('ul').hasClass('list-show')) {
        playProcessing();
    };
  });
});
