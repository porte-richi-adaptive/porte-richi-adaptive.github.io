"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var FormCreator =
/*#__PURE__*/
function () {
  function FormCreator(formId) {
    _classCallCheck(this, FormCreator);

    this.form = document.querySelector("#".concat(formId));
    this.fields = this.form.querySelectorAll('input[required], textarea[required]');
    this.submitBtns = this.form.querySelector(".".concat(formId, "__submit"));
    this.validateRegExp = {
      rus: /[а-яА-ЯЁё]/,
      text: /^[a-zA-Z]*$/,
      num: /[0-9]+/g,
      phone: /^\+ 375 \([0-9]{2}\) [0-9]{3}-[0-9]{2}-[0-9]{2}$/,
      mail: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    };
    this.errorTextTip = this.form.querySelector(".".concat(formId, "__required"));
    this.init();
  }

  _createClass(FormCreator, [{
    key: "init",
    value: function init() {
      this.setFieldEvents(this.fields);
      this.setSubmitEvent(this.submitBtns);
    }
  }, {
    key: "setFieldEvents",
    value: function setFieldEvents(fields) {
      var _this = this;

      fields.forEach(function (item, index, arr) {
        var fieldType = item.type;

        switch (fieldType) {
          case 'tel':
            Inputmask({
              "mask": "+ 375 (99) 999-99-99",
              showMaskOnHover: false
            }).mask(item);

            _this.phoneFieldEvent(item);

            break;

          case 'text':
            _this.textFieldEvent(item);

            break;
        }
      });
    }
  }, {
    key: "changeSubmitState",
    value: function changeSubmitState() {
      var counter = 0;
      this.fields.forEach(function (field, index, arr) {
        if (field.classList.contains('success')) {
          ++counter;
        }
      });

      if (counter === this.fields.length) {
        this.submitBtns.classList.remove('disabled');
      } else {
        this.submitBtns.classList.add('disabled');
      }
    }
  }, {
    key: "textFieldEvent",
    value: function textFieldEvent(field) {
      var _this2 = this;

      var isValid = this.validateRegExp['text'].test(field.value);

      if (isValid) {
        this.setSuccessState(field);
      } else {
        this.setErrorState(field);
      }

      field.addEventListener('keyup', function () {
        var isValid = _this2.validateRegExp['text'].test(field.value);

        var isValidRus = _this2.validateRegExp['rus'].test(field.value);

        field.dataset.validState = '';

        _this2.disableRequiredTips();

        if ((isValid || isValidRus) && field.value) {
          _this2.setSuccessState(field);
        } else {
          _this2.setErrorState(field);
        }

        _this2.changeSubmitState();
      });
    }
  }, {
    key: "activateRequiredTips",
    value: function activateRequiredTips() {
      this.errorTextTip.classList.add('active');
    }
  }, {
    key: "disableRequiredTips",
    value: function disableRequiredTips() {
      this.errorTextTip.classList.remove('active');
    }
  }, {
    key: "setSubmitEvent",
    value: function setSubmitEvent(btn) {
      var _this3 = this;

      btn.addEventListener('click', function (e) {
        e.preventDefault();

        _this3.fields.forEach(function (field, index, arr) {
          if (field.classList.contains('error')) {
            field.dataset.validState = 'error';

            _this3.activateRequiredTips();
          }
        });
      });
    }
  }, {
    key: "setSuccessState",
    value: function setSuccessState(field) {
      field.classList.remove('error');
      field.dataset.validState = '';
      field.classList.add('success');
    }
  }, {
    key: "setErrorState",
    value: function setErrorState(field) {
      field.classList.remove('success');
      field.classList.add('error');
    }
  }, {
    key: "phoneFieldEvent",
    value: function phoneFieldEvent(field) {
      var _this4 = this;

      if (this.validateRegExp['phone'].test(field.value)) {
        this.setSuccessState(field);
      } else {
        this.setErrorState(field);
      }

      field.addEventListener('keyup', function (e) {
        var isNumber = _this4.validateRegExp['num'].test(field.value);

        if (!isNumber) {
          return false;
        }

        var isValid = _this4.validateRegExp['phone'].test(field.value);

        field.dataset.validState = '';

        _this4.disableRequiredTips();

        if (isValid) {
          _this4.setSuccessState(field);
        } else {
          _this4.setErrorState(field);
        }

        _this4.changeSubmitState();
      });
      field.addEventListener('blur', function () {
        var isValid = _this4.validateRegExp['phone'].test(field.value);

        if (isValid) {
          _this4.setSuccessState(field);

          field.dataset.validState = '';
        } else {
          _this4.setErrorState(field);

          field.dataset.validState = 'error';
        }
      });
    }
  }]);

  return FormCreator;
}();

var app = new FormCreator('application-form');