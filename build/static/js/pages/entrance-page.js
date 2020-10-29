"use strict";

// -- Variant Tabs -- //
{
  function removeClass(collection, classForRemove) {
    collection.forEach(function (item) {
      item.classList.remove(classForRemove);
    });
  }

  var tabs = document.querySelectorAll('[data-tab-item]');
  var img = document.querySelectorAll('[data-tab-img]');
  var block = document.querySelectorAll('[data-tab-block]');
  tabs.forEach(function (item) {
    item.addEventListener('click', function () {
      if (item.classList.contains('entrance-variant__list--active')) {
        return false;
      }

      var tabNumber = $(item).data('tab-item');
      removeClass(tabs, 'entrance-variant__list--active');
      item.classList.add('entrance-variant__list--active');
      $(img).fadeOut(0);
      $(block).fadeOut(0);
      $("[data-tab-img=".concat(tabNumber, "]")).fadeIn(250);
      $("[data-tab-block=".concat(tabNumber, "]")).fadeIn(250);
    });
  });
} // -- Choose Carousel -- //

var activeItemClass = 'entrance-choose__item--active';
var allCarousels = $('[data-choose-carousel]');
allCarousels.each(function () {
  var carousel = $(this).find('.entrance-choose__carousel');
  var innerPagination = $(this).find('.entrance-choose__numbers');
  var arrows = $(this).find('.entrance-choose__arrows');
  carousel.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    if (!slick.$dots) {
      return;
    }

    var i = (currentSlide ? currentSlide : 0) + 1;
    innerPagination.text(i + '/' + slick.$dots[0].children.length);
  });
  var chooseOptions = {
    infinite: false,
    slidesToShow: 2,
    nextArrow: arrows.find('.entrance-choose__arrows-right'),
    prevArrow: arrows.find('.entrance-choose__arrows-left'),
    dots: true
  };
  carousel.slick(chooseOptions);
});
$('.entrance-choose__item').on('click', function () {
  var chooseNum = $(this).data('choose-tab');

  if ($(this).hasClass(activeItemClass)) {
    return false;
  }

  $('.entrance-choose__item').removeClass(activeItemClass);
  $(this).addClass(activeItemClass);
  $('[data-choose-carousel]').removeClass('entrance-choose__right--active');
  $("[data-choose-carousel=".concat(chooseNum, "]")).addClass('entrance-choose__right--active');
});