"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FormCreator = function FormCreator(formId) {
  _classCallCheck(this, FormCreator);

  this.form = document.querySelector("#".concat(formId));
  this.fields = this.form.querySelectorAll('input[required], textarea[required]');
};

var app = new FormCreator('application-form');
console.dir(app);