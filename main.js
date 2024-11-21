// window scroll
$(window).on("scroll", function () {
  var scrollTop = $(window).scrollTop();
  if (scrollTop >= 100) {
    $("body").addClass("fixed-header");
  } else {
    $("body").removeClass("fixed-header");
  }
});

// Document ready
$(document).ready(function () {
  // typing animation
  new Typed("#type-it", {
    strings: ["Designers", "Developers", "Freelancers"],
    typeSpeed: 100,
    Loop: true,
  });
});
