$(function () {
  $('.works-slider').slick({
    dots: true,
    arrows: false,
   
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },

    ]
  });

  $('.burger_menu').on('click', function () {
    $('.menu-list').toggleClass('active');
  });

  $('.img-cancel').on('click', function () {
    $('.menu-list').removeClass('active');
  });
  $('.burger-menu-artist').on('click', function () {
    $('.menu-list').toggleClass('active');
  });

  $('.title.click').on('click', function () {
    $('.info-box').toggleClass('active');
  });

  $('.slider-inner').slick({
    dots: true,
    arrows: true,
    prevArrow: false,
    nextArrow: '<button type="button" class="slick-next"><img src="img/page_news/arrow.png" alt=""></button>',
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 321,
        settings: {
          slidesToShow: 1,
          nextArrow: '<button type="button" class="slick-next"><img src="img/page_news/arrow-mobile.png" alt=""></button>',
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },

    ]
  });

});