$(document).ready(function () {
  $('.toggler-icon').on('click', function() {
    $(this).toggleClass('toggler-icon_close');
    $('.nav-bar').slideToggle('0.5s');
  });

  // $('.portfolio-item__inside').directionalHover({
  //   speed: 300, // Times in ms
  //   easing: 'ease',
  //   overlay: "portfolio-item__discr",
  //   hoverDelay: 0, // Times in ms
  //   inverse: false,
  //   hoverElem: '.portfolio-item__discr'
  // });

  $('.portfolio-item__inside').hoverDirection();

});

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

document.getElementById('my-age').innerHTML = getAge("1993/05/23");
