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
      phone: /^\+ 375 \([0-9]{2}\) [0-9]{3}-[0-9]{2}-[0-9]{2}$/,
      mail: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    };
    this.init();
  }

  _createClass(FormCreator, [{
    key: "init",
    value: function init() {
      this.setFieldEvents(this.fields);
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
              "mask": "+ 375 (99) 999-99-99"
            }).mask(item);

            _this.phoneFieldEvent(item);

            break;
        }
      });
    }
  }, {
    key: "phoneFieldEvent",
    value: function phoneFieldEvent(field) {
      var _this2 = this;

      field.addEventListener('keyup', function (e) {
        var val = _this2.validateRegExp['phone'].test(field.value);

        if (val) {
          console.dir(true);
        }
      });
    }
  }]);

  return FormCreator;
}();

var app = new FormCreator('application-form');
console.dir(app);