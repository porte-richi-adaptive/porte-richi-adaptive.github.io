"use strict";

var tagMenu = document.querySelector('.blog__tags__menu');
var openTagMenu = document.querySelector('.blog__tags__open-menu');
var crossButton = document.querySelector('.blog__tags__open-menu-top img');
var blogTitle = document.querySelector('.blog__title');
tagMenu.addEventListener('click', function () {
  tagMenu.style.display = "none";
  blogTitle.style.display = "none";
  openTagMenu.style.display = "block";
});
crossButton.addEventListener('click', function () {
  tagMenu.style.display = "flex";
  openTagMenu.style.display = "none";
  blogTitle.style.display = "block";
});