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
