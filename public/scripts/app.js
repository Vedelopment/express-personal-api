console.log("Sanity Check: JS is working!");

$(document).ready(function(){
  $('.list-anim').click(function showProjectsList() {
    var thing = this;
    $(thing).find('ul').toggleClass('list-show');
    $(thing).find('span').toggleClass('typewriter');
  });
});
