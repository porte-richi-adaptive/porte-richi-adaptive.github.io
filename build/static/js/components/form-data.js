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
    this.fields = document.querySelectorAll("#".concat(formName, " .js-form-validation"));
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
      phone: /^\+375 [0-9]{2} [0-9]{3} [0-9]{2} [0-9]{2}$/,
      mail: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    };
  }

  _createClass(FormData, [{
    key: "init",
    value: function init() {
      this.addFieldEvents();
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
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.fields[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var field = _step.value;
          field.addEventListener('keyup', function () {
            var validType = this.dataset.formValid;
            var isValid = self.validate(this.value, validType);
            var fieldErrorStr = 'form-data__field--error';
            var field = this.closest('.form-data__field');
            var errorField = field.querySelector('.form-data__error'); // If not validate

            if (!isValid) {
              field.classList.add(fieldErrorStr);
              errorField.innerText = self.setErrorText(validType);
            } else {
              field.classList.remove(fieldErrorStr);
              errorField.innerText = self.setSuccessText(validType);
            }
          });
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
  }]);

  return FormData;
}(); // Init


new FormData('formData').init();