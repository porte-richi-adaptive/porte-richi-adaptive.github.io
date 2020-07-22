"use strict";

var modal = document.querySelector('.js-map-modal');
var openModalBtns = document.querySelectorAll('.js-modal-open');
var body = document.querySelector('body');
var closeBtn = modal.querySelector('.js-modal-close');
var wrap = modal.querySelector('.js-modal-wrap');
var points = modal.querySelectorAll('.js-modal-point');
var mapImg = modal.querySelector('.salons__modal-img');
openModalBtns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    modal.classList.add('modal-open');
    body.classList.add('js-modal-open');
  });
});
closeBtn.addEventListener('click', function () {
  modal.classList.remove('modal-open');
  body.classList.remove('js-modal-open');
});
wrap.addEventListener('click', function (e) {
  if (e.target === mapImg) {
    points.forEach(function (item) {
      item.querySelector('input').checked = false;
    });
  }
});
modal.addEventListener('click', function (e) {
  if (e.target === this) {
    modal.classList.remove('modal-open');
    body.classList.remove('js-modal-open');
  }
});