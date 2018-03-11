$(document).ready(function(){
  // Display side bar menu when clicking on toggle menu
  $("#my-toggle-menu, .nav-item").click(function(){
    $("#my-side-bar").toggleClass("responsive");
    $("#my-toggle-menu").toggleClass("responsive");
  });

  // Open link all links in a new tab, except links with '#' in the beginning
  $("a:not([href^='#'])").attr("target", "_blank");

  // Smooth scrolling
  $("a[href*='#']:not([href='#'])").click(function () {
    let target = $(this).attr("href");
    scrollTo(target);
    event.preventDefault();
  });

  // Scroll to top as "intro" section
  $("#my-scroll-top").click(function(){
    scrollTo($("#intro"));
  });

  // Scroll to target
  function scrollTo(target) {
    $('html,body').stop().animate({
      scrollTop: $(target).offset().top
    }, 1000);
  }
});