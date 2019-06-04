// Search Bar/Box Animation
$(document).ready(function() {
  $('.search').click(function() {
    $('.search').addClass('active');
    $('.line-1').css({
      'transform': 'rotate(45deg)',
      'top': '0px',
      'left': '0px'
    });
    $('.line-2').css({
      'height': '40px',
      'opacity': '1'
    });
  });
  $('.line-1, .line-2').click(function() {
    $('.search').removeClass('active').val('');
    $('.line-1').css({
      'transform': 'rotate(-45deg)',
      'top': '-20px',
      'left': '45px'
    });
    $('.line-2').css({
      'height': '0px',
      'opacity': '0'
    });

  });
});

// Dark Mode Function need to set to localstorage for better detection.
function toggleDarkLight() {
  var body = document.getElementById("body");
  var currentClass = body.className;
  body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";

  if (currentClass === "light-mode") {
    document.querySelector(".floating").style.backgroundColor = 'rgba(51, 49, 59, 0.97)';
  } else {
    document.querySelector(".floating").style.backgroundColor = '#eee351';
  }
}

// Menu Toggle
$(function() {
  $('#nav-toggle').on('click', function() {
    $('body').toggleClass('nav-open');
  });

});


$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});
