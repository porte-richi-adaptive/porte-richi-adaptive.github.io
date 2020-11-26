"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var FormData =
/*#__PURE__*/
function () {
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
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = fields[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var field = _step.value;

          if (field.dataset.requireField === 'true') {
            ++fieldsRequiredCounter;
          }
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

      if (fieldsRequiredCounter === fields.length) {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = this.submitBtn[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var btn = _step2.value;
            btn.classList.remove('cart-checkout__submit--disabled');
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

        return true;
      }

      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = this.submitBtn[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var _btn = _step3.value;

          _btn.classList.add('cart-checkout__submit--disabled');
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    }
  }, {
    key: "setSmoothScrolling",
    value: function setSmoothScrolling() {
      var _this = this;

      var submitBtns = document.querySelectorAll('.js-form-submit');
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

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

        for (var _iterator4 = submitBtns[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          _loop();
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
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
      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        for (var _iterator5 = this.fields[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
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
        _didIteratorError5 = true;
        _iteratorError5 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
            _iterator5.return();
          }
        } finally {
          if (_didIteratorError5) {
            throw _iteratorError5;
          }
        }
      }
    }
  }]);

  return FormData;
}(); // Init


new FormData('formData').init();