"use strict";

document.addEventListener("DOMContentLoaded", function (event) {
  var modal = document.querySelectorAll('[data-simple-modal]');
  var triggerBtn = document.querySelectorAll('[data-trigger-btn]');
  var closeBtns = document.querySelectorAll('[data-simple-close]');
  var containers = document.querySelectorAll('[data-simple-container]');

  function initModal() {
    setTriggerEvent(triggerBtn);
    setCloseModalEvent(closeBtns, containers);
  }

  function setTriggerEvent() {
    var buttons = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    buttons.forEach(function (item) {
      var modalDataName = item.dataset['triggerBtn'];
      var relModal = document.querySelector("[data-simple-modal=".concat(modalDataName, "]"));
      var imgSrc = item.dataset.imgSrc;
      var img = relModal.querySelector('[data-simple-img]');
      item.addEventListener('click', function (e) {
        openModal(relModal);
        img.src = imgSrc;
      });
    });
  }

  function openModal() {
    var modal = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var openClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'opened';
    modal.classList.add(openClass);
  }

  function setCloseModalEvent(closeBtns, container) {
    container.forEach(function (item) {
      item.addEventListener('click', function (e) {
        var curr = e.target;
        var modal = item.closest('[data-simple-modal]');
        var img = modal.querySelector('[data-simple-img]');

        if (curr.classList.contains('simple-modal__container')) {
          modal.classList.remove('opened');
          img.src = null;
        }
      });
    });
    closeBtns.forEach(function (item) {
      item.addEventListener('click', function (e) {
        var modal = item.closest('[data-simple-modal]');
        var img = modal.querySelector('[data-simple-img]');
        modal.classList.remove('opened');
        img.src = null;
      });
    });
  }

  initModal();
});