"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Cart =
/*#__PURE__*/
function () {
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
    key: "setCounterEvents",
    value: function setCounterEvents() {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        var _loop = function _loop() {
          var counter = _step.value;
          var countField = counter.querySelector('.cart-table__quantity-number');
          var countFieldNumber = +countField.innerText;
          var counterPlusBtn = counter.querySelector('.cart-table__quantity-plus');
          var counterMinusBtn = counter.querySelector('.cart-table__quantity-minus');
          counterPlusBtn.addEventListener('click', function (e) {
            e.preventDefault();

            if (countFieldNumber >= 1) {
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

        for (var _iterator = this.items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          _loop();
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: "setFavoriteEvent",
    value: function setFavoriteEvent() {
      var activeClass = 'active-field';
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

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

        for (var _iterator2 = this.items[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          _loop2();
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
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
});