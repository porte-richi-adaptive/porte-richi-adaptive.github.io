"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Slider arrows
var prevArrowIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"complex__slider-prev complex__slider-arrow\" width=\"32\" height=\"62\" viewBox=\"0 0 32 62\" fill=\"none\"><path d=\"M31 61L1 31 31 1\" style=\"stroke-linejoin:round;stroke-width:2;\"/></svg>";
var nextArrowIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\"  class=\"complex__slider-next complex__slider-arrow\" width=\"32\" height=\"62\" viewBox=\"0 0 32 62\" fill=\"none\"><path d=\"M1 61L31 31 1 1\" style=\"stroke-linejoin:round;stroke-width:2;\"/></svg>";

var Modal = /*#__PURE__*/function () {
  function Modal() {
    _classCallCheck(this, Modal);

    this.modal = document.querySelectorAll('[data-modal]');
    this.$sliderModal = $('.modal__slider');
    this.triggerBtn = document.querySelectorAll('[data-modal-trigger]');
    this.closeBtn = document.querySelector('.modal__close');
    this.isInit = false;
    this.init();
  }

  _createClass(Modal, [{
    key: "init",
    value: function init() {
      this.triggerEvent();
      this.closeModalEvent();
    }
  }, {
    key: "triggerEvent",
    value: function triggerEvent() {
      var self = this;
      this.triggerBtn.forEach(function (btn) {
        btn.addEventListener('click', function () {
          var modalNum = this.dataset.modalTrigger;
          var modalPage = document.querySelector("[data-modal=\"".concat(modalNum, "\"]"));

          if (!self.isInit) {
            self.initCarousel();
            self.isInit = true;
          }

          modalPage.classList.add('opened');
          document.body.classList.add('js-modal-window-opened');
        });
      });
    }
  }, {
    key: "closeModalEvent",
    value: function closeModalEvent() {
      var self = this;
      this.closeBtn.addEventListener('click', function () {
        self.modal.forEach(function (modal) {
          modal.classList.remove('opened');
        });
        document.body.classList.remove('js-modal-window-opened');
      });
    }
  }, {
    key: "initCarousel",
    value: function initCarousel() {
      this.$sliderModal.slick({
        slidesToShow: 1,
        prevArrow: prevArrowIcon,
        nextArrow: nextArrowIcon,
        responsive: [{
          breakpoint: 1195.98,
          settings: {
            arrows: false
          }
        }]
      });
    }
  }]);

  return Modal;
}();

new Modal();