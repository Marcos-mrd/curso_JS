$('.galeria').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
  });
  $('..galeria').on('click', function() {
    slideIndex++;
    $('.galeria').slick('slickAdd','<div><h3>' + slideIndex + '</h3></div>');
  });
  
  $('.galeria').on('click', function() {
    $('.galeria').slick('slickRemove',slideIndex - 1);
    if (slideIndex !== 0){
      slideIndex--;
    }
  });
