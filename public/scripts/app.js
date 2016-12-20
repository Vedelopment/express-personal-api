console.log("Sanity Check: JS is working!");

$(document).ready(function(){

var projectTemplate = $('#project-template').html();
var compiledProjectTemplate = Handlebars.compile(projectTemplate);
var template;
var  allProjects = [];

$.ajax({
method: 'GET',
url: '/api/projects',
success: handleSuccess,
error: handleError
});

function render () {
  // empty existing posts from view
  $('#project-list').empty();

  // pass `allBooks` into the template function
  var projectsHtml = compiledProjectTemplate({ project: allProjects });

  // append html to the view
  $('#project-list').append(projectsHtml);
};

function handleSuccess(json) {
  console.log('success!');
  allProjects = json;
  render();
}

function handleError(e) {
  console.log('uh oh');
  $('#project-list').text('Failed to load books, is the server working?');
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
