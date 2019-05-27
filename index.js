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

function dark() {
  if (document.body.style.backgroundColor == 'rgb(255, 255, 255)') {

    document.body.style.backgroundColor = '#333';
    document.body.style.color = '#fff';
  } else {
    document.body.style.backgroundColor = 'rgb(255, 255, 255)';
    document.getElementsByTagName('div').style.backgroundColor = '#333';
    document.body.style.color = '#000';
  }
}

function toggleDarkLight() {
  var body = document.getElementById("body");
  var currentClass = body.className;
  body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode"

  ;
}
