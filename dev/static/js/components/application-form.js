class FormCreator {
    constructor(formId) {
        this.form = document.querySelector(`#${formId}`);
        this.fields = this.form.querySelectorAll('input[required], textarea[required]');

    }
}

const app = new FormCreator('application-form');
console.dir(app);