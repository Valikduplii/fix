$(document).ready(function () {
    $('.header__burger').click(function (event) {
       $('.header__burger, .header__menu').toggleClass('active');
       $('body').toggleClass('lock');
    })

    var isFirst = true,
    numLi = 1;
    
    $("ol").each(function () {
      var list = $(this);
      list.attr("start", numLi);
      numLi = numLi + list.find("li").length;
    });
})
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}