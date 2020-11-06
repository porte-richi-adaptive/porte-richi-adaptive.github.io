"use strict";

$(document).ready(function () {
  svg4everybody({}); // Salons link hover

  $('.salons__item-link').hover(function () {
    $(this).closest('.salons__item').find('.salons__address').addClass('hover');
  }, function () {
    $(this).closest('.salons__item').find('.salons__address').removeClass('hover');
  }); // Header More

  $('.header__item-dropdown').on('click', function () {
    $('.header__item-block').toggle();
    $(this).toggleClass('active');
  }); // --- Multicolor tip block hover

  $(".js-multicolor-tip").on({
    mouseenter: function mouseenter() {
      $(this).find('.ui-tip').css("display", "flex").fadeIn();
    },
    mouseleave: function mouseleave() {
      $(this).find('.ui-tip').fadeOut(0);
    }
  });
  $(".js-multicolor-tip").on('touchleave touchcancel', function () {
    $(this).find('.ui-tip').fadeOut(0);
  }); // --- Mobile Menu close

  $('.header__menu > svg').on('click', function () {
    $(this).hide(0);
    $('.header__menu-close').show();
    $('.header__mobile').slideDown(300);
  }); // --- Mobile Menu open

  $('.header__menu-close').on('click', function () {
    $('.header__menu > svg').show(0);
    $('.header__menu-close').hide();
    $('.header__mobile').slideUp(300);
  }); // --- Recently View Slider

  $('.recently-view__wrap').slick({
    variableWidth: true,
    autoplay: false,
    dots: false,
    arrows: false,
    infinite: true,
    swipeToSlide: true,
    touchThreshold: 100
  }); // --- Mobile Material Filter

  $('.filter-mobile__material').on('click', function () {
    $('.filter-mobile__material-dropdown').slideToggle();
    $(this).toggleClass('opened');
  }); // --- Filter Mobile Control

  $('.js-mobile-filter ').on('click', function () {
    $('body').addClass('fixed');
    $('.filter-mobile__popup').fadeIn(250);
    $('.filter-mobile__popup-all').fadeIn(250);
  });
  $('.filter-mobile__popup-close').on('click', function () {
    $('body').removeClass('fixed');
    $('.filter-mobile__popup').fadeOut(250);
    $('.filter-mobile__popup-sort').fadeOut(250);
  });
  $('.js-filter-inner').on('click', function () {
    $('.filter-mobile__popup-all').fadeOut(250);
    $('.filter-mobile__popup-sort').fadeIn(250);
  });
  $('.filter-mobile__popup-back').on('click', function () {
    $('.filter-mobile__popup-sort').fadeOut(250);
    $('.filter-mobile__popup-all').fadeIn(250);
  });
}); // Полифилы
// forEach IE 11

if ('NodeList' in window && !NodeList.prototype.forEach) {
  console.info('polyfill for IE11');

  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;

    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
} // closest IE 11


(function () {
  if (!Element.prototype.closest) {
    Element.prototype.closest = function (css) {
      var node = this;

      while (node) {
        if (node.matches(css)) return node;else node = node.parentElement;
      }

      return null;
    };
  }
})(); // matches IE 11


(function () {
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector;
  }
})(); //Array.form IE 11


if (!Array.from) {
  Array.from = function (object) {
    'use strict';

    return [].slice.call(object);
  };
}