"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Cart = /*#__PURE__*/function () {
  function Cart(cartId) {
    _classCallCheck(this, Cart);

    this.cart = document.querySelectorAll("#".concat(cartId)) || {};
    this.items = document.querySelectorAll("#".concat(cartId, " .cart-table__row")) || {}; // Init

    this.init();
  }

  _createClass(Cart, [{
    key: "init",
    value: function init() {
      this.setCounterEvents();
      this.setFavoriteEvent();
    }
  }, {
    key: "setSubmitEvent",
    value: function setSubmitEvent() {}
  }, {
    key: "setCounterEvents",
    value: function setCounterEvents() {
      var _iterator = _createForOfIteratorHelper(this.items),
          _step;

      try {
        var _loop = function _loop() {
          var counter = _step.value;
          var countField = counter.querySelector('.cart-table__quantity-number');
          var countFieldNumber = +countField.innerText;
          var counterPlusBtn = counter.querySelector('.cart-table__quantity-plus');
          var counterMinusBtn = counter.querySelector('.cart-table__quantity-minus');
          counterPlusBtn.addEventListener('click', function (e) {
            e.preventDefault();

            if (countFieldNumber >= 1 && countFieldNumber <= 98) {
              counterMinusBtn.classList.remove('disabled');
              countField.innerText = ++countFieldNumber;
            }
          });
          counterMinusBtn.addEventListener('click', function (e) {
            e.preventDefault();

            if (countFieldNumber > 1) {
              countField.innerText = --countFieldNumber;
            } else {
              counterMinusBtn.classList.add('disabled');
            }
          });
        };

        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "setFavoriteEvent",
    value: function setFavoriteEvent() {
      var activeClass = 'active-field';

      var _iterator2 = _createForOfIteratorHelper(this.items),
          _step2;

      try {
        var _loop2 = function _loop2() {
          var obj = _step2.value;
          var favoriteBtn = obj.querySelector('.cart-table__item-favorite');
          var item = favoriteBtn.closest('.cart-table__item');

          if (item.classList.contains(activeClass)) {
            favoriteBtn.innerText = 'В избранном';
          }

          favoriteBtn.addEventListener('click', function (e) {
            e.preventDefault();

            if (!this.classList.contains(activeClass)) {
              item.classList.add(activeClass);
              this.innerText = 'В избранном';
            }
          });
        };

        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          _loop2();
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }]);

  return Cart;
}(); // Init
// Set name of cart by Id


var cart = new Cart('cart'); // --- Promo code ---

var promoField = document.querySelector('.promo__field');
var promoSubmit = document.querySelector('.promo__submit');
promoField.addEventListener('keyup', function (e) {
  e.preventDefault();

  if (this.value.length <= 1) {
    promoSubmit.classList.remove('promo__submit--active');
  } else {
    promoSubmit.classList.add('promo__submit--active');
  }
}); // --- Sticky Offer Block ---

var sticky = new Sticky('.cart-checkout'); // Add Class on resize

window.addEventListener('resize', function (event) {
  var viewWidth = window.innerWidth;

  if (viewWidth > 856 && viewWidth < 1480) {
    sticky.update();
  }
});