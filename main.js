$(function () {
  let navHeight = $('.nav').outerHeight();
  let sections = $('.section');

  function getOffsetTop(el) {
      return ($(el).offset().top > 0) ? $(el).offset().top - navHeight - 1 : $(el).offset().top; // позицию секции относительно верха документа
  }

  $('.nav__link[href^="#"]').on('click', function (ev) {
    ev.preventDefault();
    
    let id = $(this).attr('href');
    let offsetTop = getOffsetTop(id);

    $('html, body').animate({
      scrollTop: offsetTop +1
    }, 500);
  });

  $(document).on('scroll', function (ev) {
    let scrollPoint = $(this).scrollTop(); // сколько мы проскролили

    sections.each(function () {
      let offsetTop = getOffsetTop(this);// позицию секции относительно верха документа
      if (scrollPoint > offsetTop) { // проскролили ли мы больше, чем позиция секции
        
        let id = $(this).attr('id'); // получаем id этой секции 

        $('.nav__link').removeClass('nav__link--active'); // забрали у всех классы
        $(`.nav__link[href="#${id}"]`).addClass('nav__link--active'); // даем активный класс ссылке, у которой в href лежит id секции
      }
    });

  });
    $(document).scroll();

    $('.back-to-top').on('click', function (){
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });


});