$(document).ready(function(){
  let portfolioTemplate = $('#portfolio-template').html();
  let numPortfolioInit = 3;
  addPortfolio();

  // Render more portfolio after clicking this button
  $("#btn-see-more").click(function(){
    addPortfolio();
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
  $("#my-scroll-top").click(function(){
    scrollTo($("#intro"));
  });

  // Scroll to target
  function scrollTo(target) {
    $('html,body').stop().animate({
      scrollTop: $(target).offset().top
    }, 1000);
  }

  function addPortfolio() {
    let rendered;
    for (let i = 0; i < numPortfolioInit; i++) {
      let item = portfolios.pop();
      if(item) {
        Mustache.parse(portfolioTemplate);
        rendered = Mustache.render(portfolioTemplate, item);
        $("#my-portfolios").append(rendered);
      }
      else {
        $("#btn-see-more").css("display", "none");
      }
    }
  }
});