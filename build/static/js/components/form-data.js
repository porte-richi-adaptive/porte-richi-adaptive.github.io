"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var FormData = /*#__PURE__*/function () {
  function FormData(formName) {
    _classCallCheck(this, FormData);

    this.form = document.querySelector("#".concat(formName));
    this.phoneField = document.querySelector("[data-form-valid='phone']");
    this.submitBtn = document.querySelectorAll('.cart-checkout__submit');
    this.fields = document.querySelectorAll("#".concat(formName, " .js-form-validation"));
    this.requiredFields = document.querySelectorAll('[data-require-field]');
    this.errorText = {
      name: {
        success: '',
        error: 'Мы не сможем обратиться к вам по этому имени'
      },
      phone: {
        success: '',
        error: 'Не дозвонимся по этому номеру и не сможем уточнить детали заказа '
      },
      mail: {
        success: 'Мы пришлём письмо с подтверждением заказа',
        error: 'Не сможем отправить письмо с подтверждением заказа на этот адрес'
      }
    };
    this.validateReg = {
      phone: /^\+ 375 \([0-9]{2}\) [0-9]{3}-[0-9]{2}-[0-9]{2}$/,
      mail: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    };
  }

  _createClass(FormData, [{
    key: "init",
    value: function init() {
      this.checkRequiredFields(this.requiredFields);
      this.initPhoneMask();
      this.addFieldEvents();
      this.setSmoothScrolling();
    }
  }, {
    key: "initPhoneMask",
    value: function initPhoneMask() {
      if (this.phoneField !== null) {
        Inputmask({
          "mask": "+ 375 (99) 999-99-99"
        }).mask(this.phoneField);
      }
    }
  }, {
    key: "checkRequiredFields",
    value: function checkRequiredFields(fields) {
      var fieldsRequiredCounter = 0;

      var _iterator = _createForOfIteratorHelper(fields),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var field = _step.value;

          if (field.dataset.requireField === 'true') {
            ++fieldsRequiredCounter;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      if (fieldsRequiredCounter === fields.length) {
        var _iterator2 = _createForOfIteratorHelper(this.submitBtn),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var btn = _step2.value;
            btn.classList.remove('cart-checkout__submit--disabled');
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        return true;
      }

      var _iterator3 = _createForOfIteratorHelper(this.submitBtn),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _btn = _step3.value;

          _btn.classList.add('cart-checkout__submit--disabled');
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
  }, {
    key: "setSmoothScrolling",
    value: function setSmoothScrolling() {
      var _this = this;

      var submitBtns = document.querySelectorAll('.js-form-submit');

      var _iterator4 = _createForOfIteratorHelper(submitBtns),
          _step4;

      try {
        var _loop = function _loop() {
          var btn = _step4.value;
          btn.addEventListener('click', function (e) {
            e.preventDefault();

            if (btn.classList.contains('cart-checkout__submit--disabled')) {
              _this.form.scrollIntoView({
                behavior: 'smooth'
              });
            }
          });
        };

        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    }
  }, {
    key: "nameValidation",
    value: function nameValidation(value) {
      if (value.length > 1) {
        return true;
      }
    }
  }, {
    key: "validate",
    value: function validate(value, type) {
      if (type === 'name') {
        return this.nameValidation(value);
      }

      return this.validateReg[type].test(value);
    }
  }, {
    key: "setErrorText",
    value: function setErrorText(type) {
      return this.errorText[type].error;
    }
  }, {
    key: "setSuccessText",
    value: function setSuccessText(type) {
      return this.errorText[type].success;
    }
  }, {
    key: "addFieldEvents",
    value: function addFieldEvents() {
      var self = this;

      var _iterator5 = _createForOfIteratorHelper(this.fields),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var field = _step5.value;
          field.addEventListener('keyup', function () {
            var validType = this.dataset.formValid;
            var isValid = self.validate(this.value, validType);
            var fieldErrorStr = 'form-data__field--error';
            var field = this.closest('.form-data__field');
            var errorField = field.querySelector('.form-data__error'); // If not validate

            if (!isValid) {
              field.classList.add(fieldErrorStr);
              errorField.innerText = self.setErrorText(validType);
              this.dataset.requireField = false;
            } else {
              field.classList.remove(fieldErrorStr);
              errorField.innerText = self.setSuccessText(validType);
              this.dataset.requireField = true;
            }

            self.checkRequiredFields(self.requiredFields);
          });
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    }
  }]);

  return FormData;
}(); // Init


new FormData('formData').init();