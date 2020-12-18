"use strict";

$(document).ready(function () {
  function removeClass(collection, classForRemove) {
    collection.forEach(function (item) {
      item.classList.remove(classForRemove);
    });
  }

  var tabs = document.querySelectorAll('[data-tab-item]');
  var img = document.querySelectorAll('[data-tab-img]');
  var block = document.querySelectorAll('[data-tab-block]');
  var dropdown = $('[data-js-choose]');
  var activeTab = $('.entrance-variant__list--active').text();
  dropdown.find('.entrance-variant__choose-name').text(activeTab);
  dropdown.on('click tap', function () {
    $('.entrance-variant__tabs').toggleClass('opened');
  });
  tabs.forEach(function (item) {
    item.addEventListener('click', function () {
      if (item.classList.contains('entrance-variant__list--active')) {
        return false;
      }

      dropdown.find('.entrance-variant__choose-name').text($(item).text());
      $('.entrance-variant__tabs').removeClass('opened');
      var tabNumber = $(item).data('tab-item');
      removeClass(tabs, 'entrance-variant__list--active');
      item.classList.add('entrance-variant__list--active');
      $(img).fadeOut(0);
      $(block).fadeOut(0);
      $("[data-tab-img=".concat(tabNumber, "]")).fadeIn(250);
      $("[data-tab-block=".concat(tabNumber, "]")).fadeIn(250);
    });
  }); // -- Choose Carousel -- //

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
      dots: true,
      responsive: [{
        breakpoint: 1195,
        settings: {
          slidesToShow: 1
        }
      }]
    };
    carousel.slick(chooseOptions);
  });
  var materialChooseDropDown = $('[data-js-material]');
  materialChooseDropDown.find('.entrance-variant__choose-name').text($('.entrance-choose__item--active .entrance-choose__name').text());
  $('.entrance-choose__tip').text($('.entrance-choose__item--active .entrance-choose__descr').text());
  materialChooseDropDown.on('click', function () {
    $('.entrance-choose__list').toggleClass('opened');
  });
  $('.entrance-choose__item').on('click', function () {
    var chooseNum = $(this).data('choose-tab');

    if ($(this).hasClass(activeItemClass)) {
      return false;
    }

    $('.entrance-choose__tip').text($('.entrance-choose__item--active .entrance-choose__descr').text());
    materialChooseDropDown.find('.entrance-variant__choose-name').text($(this).find('.entrance-choose__name').text());
    $('.entrance-choose__list').removeClass('opened');
    $('.entrance-choose__item').removeClass(activeItemClass);
    $(this).addClass(activeItemClass);
    $('[data-choose-carousel]').removeClass('entrance-choose__right--active');
    $("[data-choose-carousel=".concat(chooseNum, "]")).addClass('entrance-choose__right--active');
  }); // -- Entrance Level Carousel -- //

  var entranceOptions = {
    variableWidth: true,
    infinite: false,
    slidesToShow: 3,
    nextArrow: $('.entrance-level__arrows-right'),
    prevArrow: $('.entrance-level__arrows-left'),
    dots: false,
    responsive: [{
      breakpoint: 1195,
      settings: {
        variableWidth: true,
        swipeToSlide: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        touchThreshold: 500
      }
    }]
  };
  $('.entrance-level__slider').slick(entranceOptions); // -- Comments Carousel -- //

  $('.comments__list').slick({
    slidesToShow: 1,
    infinite: false,
    nextArrow: $('.comments__right'),
    prevArrow: $('.comments__left'),
    variableWidth: true,
    responsive: [{
      breakpoint: 1195,
      settings: {
        variableWidth: true,
        swipeToSlide: true,
        slidesToScroll: 1,
        touchThreshold: 100
      }
    }]
  }); // -- Defence tabs -- //

  var defenceTabs = $('[data-defence-tab]');
  var defenceTabsPages = $('[data-defence-page]');
  var defenceActiveTabClass = 'entrance-defence__item--active';
  var defenceActiveTab = $('.entrance-defence__item--active');
  var defenceTabsPicture = $('[data-defence-img]');
  var defenceDropdown = $('[data-js-defence]');
  defenceDropdown.find('.entrance-variant__choose-name').text(defenceActiveTab.text());
  defenceDropdown.on('click', function () {
    $('.entrance-defence__over').toggleClass('opened');
  });
  defenceTabs.on('click', function () {
    var tabNumber = $(this).data('defence-tab');
    var page = $("[data-defence-page=".concat(tabNumber, "]"));
    var img = $("[data-defence-img=".concat(tabNumber, "]"));
    $('.entrance-defence__over').removeClass('opened');
    defenceDropdown.find('.entrance-variant__choose-name').text($(this).text());
    defenceTabsPages.fadeOut(0);
    page.fadeIn();
    defenceTabsPicture.fadeOut(0);
    img.fadeIn();
    defenceTabs.removeClass(defenceActiveTabClass);
    $(this).addClass(defenceActiveTabClass);
  });
  /* --- First screen, colors carousel --- */

  $(window).on('load resize orientationchange', function () {
    $('.js-colors-c').each(function () {
      var $carousel = $(this);

      if ($(window).width() > 856) {
        if ($carousel.hasClass('slick-initialized')) {
          $carousel.slick('unslick');
        }
      } else {
        if (!$carousel.hasClass('slick-initialized')) {
          $carousel.slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            mobileFirst: true,
            dots: false,
            arrows: false,
            variableWidth: true,
            infinite: false
          });
        }
      }
    });
  });
  /* --- Rotate Image on First Screen --- */

  $('.js-item-resfresh').on('click', function () {
    var wrapper = $(this).closest('.js-facade');
    var frontDescr = wrapper.find("[data-facade=front]");
    var backDescr = wrapper.find("[data-facade=back]");
    var openClass = 'js-facade-opened';

    if (frontDescr.hasClass(openClass)) {
      frontDescr.fadeOut(0);
      backDescr.fadeIn(250);
      frontDescr.removeClass(openClass);
      backDescr.addClass(openClass);
    } else {
      backDescr.fadeOut(0);
      frontDescr.fadeIn(250);
      backDescr.removeClass(openClass);
      frontDescr.addClass(openClass);
    }

    $(this).find('.js-item-rotate').toggleClass('rotate');
  });
  /* --- Search Tabs --- */

  var searchTabs = $('[data-search-tab]');
  var activeTabClass = 'entrance-search__item--active';
  var searchEntranceSection = $('.entrance-search');
  var searchEntrancePages = $('[data-search-page]');
  searchEntrancePages.each(function (i, el) {
    var carousel = $(el).find('.entrance-search__carousel');
    var nextArrow = $(el).find('.entrance-search__arrows-right');
    var prevArrow = $(el).find('.entrance-search__arrows-left');
    var searchTabsOptions = {
      variableWidth: true,
      infinite: false,
      slidesToShow: 2,
      slidesToScroll: 2,
      nextArrow: nextArrow,
      prevArrow: prevArrow,
      dots: false,
      responsive: [{
        breakpoint: 856,
        settings: {
          variableWidth: true,
          swipeToSlide: true,
          slidesToScroll: 1,
          slidesToShow: 1,
          touchThreshold: 100
        }
      }]
    };
    carousel.slick(searchTabsOptions);
  });
  searchTabs.removeClass(activeTabClass);
  searchTabs.first().addClass(activeTabClass);
  searchTabs.on('click', function () {
    var tabNumber = $(this).data('search-tab');
    var activePage = $("[data-search-page=".concat(tabNumber, "]"));
    var activeDescr = $("[data-search-block=".concat(tabNumber, "]"));

    if ($(this).hasClass(activeTabClass)) {
      return false;
    }

    $('[data-search-block]').removeClass('entrance-search__view--open');
    ;
    activeDescr.addClass('entrance-search__view--open');
    searchEntrancePages.removeClass('opened');
    activePage.addClass('opened');
    searchTabs.removeClass(activeTabClass);
    $(this).addClass(activeTabClass);
    $('.entrance-search__controll').removeClass('opened');
    $('.entrance-search__dropdown-text ').text($(this).text());
  });
  $('.entrance-search__dropdown').on('click', function () {
    $('.entrance-search__controll').toggleClass('opened');
  });
  /* --- Material Gallery Pop-Up --- */

  $('.entrance-choose__slide').on('click', function () {
    var materialGalleryCarousel = $(this).closest('.entrance-choose__carousel');
    var materialGalleryCollection = materialGalleryCarousel.find('.entrance-choose__slide');
    var modalCarousel = $('.js-material-gallery-list');
    var gallery = $('.js-material-gallery');
    var sliderIndex = $(this).index();
    var modalCollection = [];
    materialGalleryCollection.each(function (i, el) {
      var item = $(el);
      var itemImg = item.find('img').attr('src');
      var itemName = item.find('.entrance-choose__slide-name').text();
      var itemColor = item.find('.entrance-choose__slide-color').text();
      var result = {
        src: itemImg,
        name: "".concat(itemName, ", ").concat(itemColor)
      };
      modalCollection.push(result);
      return true;
    });
    modalCollection.forEach(function (e, i) {
      var scheme = "\n                <div class=\"material-gallery__item\">\n                    <img src=\"".concat(e.src, "\" alt=\"").concat(e.name, "\">\n                    <span class=\"material-gallery__name\">\n                        ").concat(e.name, "\n                    </span>\n                </div>\n            ");
      modalCarousel.append(scheme);
    });
    $('.js-material-gallery-list').slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: $('.material-gallery__right'),
      prevArrow: $('.material-gallery__left'),
      dots: true
    });
    $('.js-material-gallery-list').slick('slickGoTo', sliderIndex);
    gallery.addClass('opened');
    $('body').css('overflow', 'hidden');
  });
  $('.material-gallery__close').on('click', function () {
    var carousel = $('.js-material-gallery-list ');
    carousel.slick('unslick');
    $('.material-gallery__item').remove();
    $('.js-material-gallery').removeClass('opened');
    $('body').css('overflow', 'auto');
  });
  /* --- Item Color Picker --- */

  $('.js-item-color').on('click', function () {
    var src = $(this).data('item-color');
    var pic = $('.js-first-screen');
    var wrap = $(this).closest('.interior-first__colors');
    var coll = wrap.find('.interior-first__color');
    coll.removeClass('interior-first__color--active');
    $(this).addClass('interior-first__color--active');
    pic.fadeOut(250, function () {
      $(this).attr('src', src);
    }).fadeIn(250);
  });
  $('.interior-complect__slider').on('init', function (event, slick, currentSlide, nextSlide) {
    var res = "".concat(slick.currentSlide + 1, " / ").concat(slick.slideCount);
    $('.interior-complect__counter ').html(res);
  });
  $('.interior-complect__slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
    var res = "".concat(currentSlide + 1, " / ").concat(slick.slideCount);
    $('.interior-complect__counter ').html(res);
  });
  $('.interior-complect__slider').slick({
    prevArrow: $('.interior-complect__nav-left'),
    nextArrow: $('.interior-complect__nav-right'),
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1
  });
  $('.interior-complect__item').on('click', function () {
    var activeTabClass = 'interior-complect__item--active';
    var tabNumber = $(this).data('complectTab');
    var contentPage = $("[data-complect-content=".concat(tabNumber, "]"));
    var allTabs = $('.interior-complect__item');
    var allPages = $('[data-complect-content]');

    if ($(this).hasClass(activeTabClass)) {
      $(this).removeClass(activeTabClass);
      contentPage.slideUp(250);
      return true;
    }

    allTabs.removeClass(activeTabClass);
    allPages.slideUp(250);
    $(this).addClass(activeTabClass);
    contentPage.slideDown(250);
  });
  /* --- Choose Tab  --- */

  $('.interior-choose__item').on('click', function () {
    var items = $('[data-choose-item]');
    var tabs = $('[data-choose-tab]');
    var pages = $('[data-choose-descr]');
    var number = $(this).data('chooseItem');
    var activeTab = $("[data-choose-tab=".concat(number, "]"));
    var activePage = $("[data-choose-descr=".concat(number, "]"));
    items.removeClass('interior-choose__item--active');
    $(this).addClass('interior-choose__item--active');
    activeTab.css("display", "flex");
    tabs.fadeOut(0);
    activeTab.fadeIn(250);
    pages.fadeOut(0);
    activePage.fadeIn(250);
    $('.js-choose-list').removeClass('open');
    $('.interior-choose__dropdown span').text($(this).text());
  });
  $('.interior-choose__dropdown').on('click', function () {
    $('.interior-choose__list').toggleClass('open');
  });
  $('.interior-similar__mobile').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false,
    touchThreshold: 100
  });
  /* --- Scroll To block  --- */

  $(".interior-first__move").on('click', function () {
    $('html, body').animate({
      scrollTop: $(".interior-complect").offset().top
    }, 1500);
  });
  /* --- Extras popup  ---  */

  $('.interior-complete__link').on('click', function () {
    $('.extras__popup').fadeIn(0, function () {
      $(this).css('display', 'flex');
      $('.extras__popup-slider').slick({
        prevArrow: $('.extras__popup-left'),
        nextArrow: $('.extras__popup-right'),
        dots: true
      });
    });
  });
  $('.extras__popup-close').on('click', function () {
    $('.extras__popup').fadeOut(0);
  });
  /* Add for hover in Safari  */

  (function () {
    $("*").on('touchstart', function () {
      $(this).trigger('hover');
    }).on('touchend', function () {
      $(this).trigger('hover');
    });
  })();
});