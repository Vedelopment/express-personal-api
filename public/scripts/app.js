console.log("Sanity Check: JS is working!");

$(document).ready(function(){
  $('.list-anim').click(function showProjectsList() {
    var thing = this;
    $(thing).find('ul').toggleClass('list-show');
    $(thing).find('span').toggleClass('typewriter');
  });
  var source = $('#project-li-template').html();
  var projectTemplate = Handlebars.compile(source);
  var projectHtml = template({name: data.developers[0].first_name, last_name: data.developers[0].last_name, github_username: data.developers[0].github_username });
});
