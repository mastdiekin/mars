import hello from './lib/hello.js';
import $ from 'jquery';
import preloader from './lib/preloader.js';
import svg4everybody from '../libs/svg4everybody/dist/svg4everybody.legacy.js';
import '../libs/slick-carousel/slick/slick.js';

hello();
preloader();
svg4everybody({
  polyfill: true 
});

$('.hero__burger, .hero__close').click(function() {
  $('.hero__close').toggleClass('is-active');
  $('.hero__burger').toggleClass('is-active');
  $('.hero__nav').toggleClass('is-active');
});

$(window).scroll(function() {

  var wScroll = $(this).scrollTop();
  var $hero = $('.hero').outerHeight(true);

  if (wScroll > $hero) {
    $('.hero__top').addClass('scrolled');
  }
  else {
    $('.hero__top').removeClass('scrolled');
  };

});

const $slider = $('.hero__slider');
$slider
// .on('init', () => {
//   mouseWheel($slider);
// })
  .slick({
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 10000,
    draggable: false,
    cssEase: 'linear',
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    touchThreshold: 500,
    speed: 900
  });
// function mouseWheel($slider) {
//   $($slider).on('wheel', { $slider: $slider }, mouseWheelHandler);
// }
// function mouseWheelHandler(event) {
//   event.preventDefault();
//   const $slider = event.data.$slider;
//   const delta = event.originalEvent.deltaY;
//   if(delta > 0) {
//     $slider.slick('slickNext');
//   }
//   else {
//     $slider.slick('slickPrev');
//   }
// }

