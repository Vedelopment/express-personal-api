console.log("Sanity Check: JS is working!");

$(document).ready(function(){

// var projectTemplate = $('#project-template').html();
// var compiledProjectTemplate = Handlebars.compile(projectTemplate);
// $('#project-list').html(compiledProjectTemplate);



// AUDIO //
  function playProcessing() {
    compAudio.play();
  }
// SHOW/HIDE MENUS + AUDIO PLAY //
  $('.list-anim').click(function showProjectsList() {
    $(this).find('ul').toggleClass('list-show');
    $(this).find('span').toggleClass('typewriter');
    if ($(this).find('ul').hasClass('list-show')) {
        playProcessing();
    };
  });
});
