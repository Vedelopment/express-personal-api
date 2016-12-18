console.log("Sanity Check: JS is working!");

$(document).ready(function(){
  var x = document.getElementById("compAudio");
  // var projectsSource = $('#projectsSource').html();
  // var projectsTemplate = Handelbars.compile(projectsSource);


  function playProcessing() {
    x.play();
  }
  $('.list-anim').click(function showProjectsList() {
    var thing = this;
    $(thing).find('ul').toggleClass('list-show');
    $(thing).find('span').toggleClass('typewriter');
    if ($(this).find('ul').hasClass('list-show')) {
        playProcessing();
    };
  });
});
