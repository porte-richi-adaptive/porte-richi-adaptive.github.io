"use strict";

var state = {
  'disable': 'result-tabs__tab--disabled'
};
var container = document.querySelector('.result-tabs');
var tabs = container.querySelectorAll('.result-tabs__tab');
var pages = container.querySelectorAll('.result-tabs__page');
tabs.forEach(function (tab) {
  tab.addEventListener('click', function (e) {
    e.preventDefault();
    var name = tab.dataset.tab || '';
    var page = container.querySelector("[data-tabs-page=".concat(name, "]"));
    addDisableState(tabs);
    closeAllPages(pages);
    page.style.display = 'block';
    this.classList.remove(state['disable']);
  });
});

function addDisableState(items) {
  items.forEach(function (item) {
    item.classList.add(state['disable']);
  });
}

function closeAllPages(pages) {
  pages.forEach(function (page) {
    page.style.display = 'none';
  });
}