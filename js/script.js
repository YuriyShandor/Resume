$(document).ready(function () {
  $('.toggler-icon').on('click', function() {
    $(this).toggleClass('toggler-icon_close');
    $('.nav-bar').slideToggle('0.5s');
  });

  $('.portfolio-item__inside').hoverDirection();

  // Section Navigation
  $('a[href^="#"]').on('click',function (e) {
	  e.preventDefault();

	  var target = this.hash;
	  var $target = $(target);

	  $('html, body').stop().animate({
	     'scrollTop': $target.offset().top
	    }, 700, 'swing', function () {
	      window.location.hash = target;
	  });
	});

  // Script for Birth Date
  function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  $('#my-age').html(getAge("1993/05/23"));

  // Script for Experience Count
  var experienceStart = Date.parse("2018/03/01");
  var todayDate = new Date();
  var diffDate =  todayDate - experienceStart;

  var experienceYears = Math.floor(diffDate / 31536000000);
  var experienceMonths = Math.floor((diffDate % 31536000000) / 2628000000);

  $('#experienceYears').html(experienceYears);
  $('#experienceMonths').html(experienceMonths);
});
