class FormCreator {
    constructor(formId) {
        this.form = document.querySelector(`#${formId}`);
        this.fields = this.form.querySelectorAll('input[required], textarea[required]');
        this.submitBtns = this.form.querySelector(`.${formId}__submit`);
        this.validateRegExp = {
            phone: /^\+ 375 \([0-9]{2}\) [0-9]{3}-[0-9]{2}-[0-9]{2}$/,
            mail: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        };
        this.init();
    }
    init() {
        this.setFieldEvents(this.fields);

    }
    setFieldEvents(fields) {
        fields.forEach((item, index, arr) => {
            const fieldType = item.type;
            switch(fieldType) {
                case 'tel':
                    Inputmask({"mask": "+ 375 (99) 999-99-99"}).mask(item);
                    this.phoneFieldEvent(item);
                    break;
            }
        });
    }

    phoneFieldEvent(field) {
        field.addEventListener('keyup', (e) => {
            let val = this.validateRegExp['phone'].test(field.value);
            if(val) {
                console.dir(true);
            }
        });
    }
}

const app = new FormCreator('application-form');
console.dir(app);