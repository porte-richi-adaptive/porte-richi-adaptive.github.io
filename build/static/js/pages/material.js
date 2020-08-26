"use strict";

// Veneer Tabs
function tabInit() {
  $('.material__veneer-item').removeClass('active');
  $('.material__veneer-content').removeClass('active');
  $('.material__veneer-item[data-tab="1"]').addClass('active');
  $('.material__veneer-content[data-page="1"]').addClass('active');
  $('.material__veneer-item[data-tab]').on('click', function () {
    var tabNum = $(this).data('tab');
    var allTabs = $('.material__veneer-item[data-tab]');
    var allPage = $('.material__veneer-content[data-page]');
    var pageActive = $(".material__veneer-content[data-page=".concat(tabNum, "]"));
    allTabs.removeClass('active');
    $(this).addClass('active');
    allPage.fadeOut(0);
    pageActive.fadeIn();
    pageActive.css('display', 'flex');
  });
}

tabInit();