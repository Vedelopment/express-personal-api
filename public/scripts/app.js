console.log("Sanity Check: JS is working!");

$(document).ready(function(){
  $('.list-anim').click(function showProjectsList() {
    var thing = this;
    $(thing).find('ul').toggleClass('list-show');
    $(thing).find('li').toggleClass('typewriter');
    // setTimeout(function() {
    //     $(thing).find('li').stop(true, true).removeClass('typewriter');
    //   }, 4000);
  });
});
