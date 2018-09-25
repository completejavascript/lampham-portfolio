$(document).ready(function(){
  let portfolioTemplate = $('#portfolio-template').html();
  Mustache.parse(portfolioTemplate);

  const numPortfolioInit = 6, numPortfolioLoad = 4; 
  let portfolios;

  // Get data
  $.getJSON("./data/portfolios.json", data => {
    portfolios = data.projects;
    addPortfolio(numPortfolioInit);
  });

  // Render more portfolio after clicking this button
  $("#btn-see-more").click(function(){
    addPortfolio(numPortfolioLoad);
  });

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
  let $myScrollTop = $("#my-scroll-top");
  $myScrollTop.click(function(){
    scrollTo($("#intro"));
  });

  // Hide or show "back to top" button when scrolling page
  let debounce_timer;
  $(window).scroll(function() {
    if(debounce_timer) {
      window.clearTimeout(debounce_timer);
    }
  
    debounce_timer = window.setTimeout(function() {
      if ($(window).scrollTop() > 100) $myScrollTop.show();
      else $myScrollTop.hide();
    }, 100);
  });

  // Scroll to target
  function scrollTo(target) {
    $('html,body').stop().animate({
      scrollTop: $(target).offset().top
    }, 1000);
  }

  function addPortfolio(numPortfolio) {
    let rendered;
    for (let i = 0; i < numPortfolio; i++) {
      let item = portfolios.pop();
      if(item) {
        rendered = Mustache.render(portfolioTemplate, item);
        $("#my-portfolios").append(rendered);
      }
    }

    if (portfolios.length === 0) 
      $("#btn-see-more").css("display", "none");
  }
});
