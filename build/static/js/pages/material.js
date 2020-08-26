"use strict";

// Veneer Tabs
function tabInit() {
  var list = $('.material__veneer-list');
  var dropdown = $('[data-tab-dropdown]');
  $('.material__veneer-item').removeClass('active');
  $('.material__veneer-content').removeClass('active');
  $('.material__veneer-item[data-tab="1"]').addClass('active');
  $('.material__veneer-content[data-page="1"]').addClass('active');
  $('.material__veneer-item[data-tab]').on('click', function () {
    var tabNum = $(this).data('tab');
    var allTabs = $('.material__veneer-item[data-tab]');
    var allPage = $('.material__veneer-content[data-page]');
    var pageActive = $(".material__veneer-content[data-page=".concat(tabNum, "]"));
    var name = $(this).text();
    dropdown.removeClass('opened');
    dropdown.text(name);
    allTabs.removeClass('active');
    $(this).addClass('active');
    allPage.fadeOut(0);
    pageActive.fadeIn();
    pageActive.css('display', 'flex');
  });
  $('[data-tab-dropdown]').on('click', function () {
    if ($(this).hasClass('opened')) {
      $(this).removeClass('opened');
      return true;
    }

    $(this).addClass('opened');
  });
}

tabInit();