class FormCreator {
    constructor(formId) {
        this.form = document.querySelector(`#${formId}`);
        this.fields = this.form.querySelectorAll('input[required], textarea[required]');
        this.submitBtns = this.form.querySelector(`.${formId}__submit`);
        this.validateRegExp = {
            text: /[\wа-я]+/ig,
            phone: /^\+ 375 \([0-9]{2}\) [0-9]{3}-[0-9]{2}-[0-9]{2}$/,
            mail: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        };
        this.errorTextTip = this.form.querySelector(`.${formId}__required`);
        this.init();
    }
    init() {
        this.setFieldEvents(this.fields);
        this.setSubmitEvent(this.submitBtns);
    }
    setFieldEvents(fields) {
        fields.forEach((item, index, arr) => {
            const fieldType = item.type;
            switch(fieldType) {
                case 'tel':
                    Inputmask({"mask": "+ 375 (99) 999-99-99", showMaskOnHover: false,}).mask(item);
                    this.phoneFieldEvent(item);
                    break;
                case 'text':
                    this.textFieldEvent(item);
                    break;
            }
        });
    }

    changeSubmitState() {
        let counter = 0;
        this.fields.forEach((field, index, arr) => {
            if( field.classList.contains('success') ){
                ++counter;
            }
        });
        if(counter === this.fields.length) {
            this.submitBtns.classList.remove('disabled');
        } else {
            this.submitBtns.classList.add('disabled');
        }

    }

    textFieldEvent(field) {
        let isValid = this.validateRegExp['text'].test(field.value);
        if(isValid) {
            this.setSuccessState(field);
        } else {
            this.setErrorState(field);
        }

        field.addEventListener('keyup', () => {
            let isValid = this.validateRegExp['text'].test(field.value);
            field.dataset.validState = '';
            this.disableRequiredTips();


            if(isValid) {
                this.setSuccessState(field);
            } else {
                this.setErrorState(field);
            }
            this.changeSubmitState();
        });
    }

    activateRequiredTips() {
        this.errorTextTip.classList.add('active');
    }

    disableRequiredTips() {
        this.errorTextTip.classList.remove('active');
    }

    setSubmitEvent(btn) {

        btn.addEventListener('click', (e) => {
            e.preventDefault();

            this.fields.forEach((field, index, arr) => {
                if(field.classList.contains('error')) {
                    field.dataset.validState = 'error';
                    this.activateRequiredTips();
                }
            });

        });
    }


    setSuccessState(field) {
        field.classList.remove('error');
        field.dataset.validState = '';
        field.classList.add('success');
    }

    setErrorState(field) {
        field.classList.remove('success');
        field.classList.add('error');
    }

    phoneFieldEvent(field) {

        if(this.validateRegExp['phone'].test(field.value)) {
            this.setSuccessState(field);
        } else {
            this.setErrorState(field);
        }

        field.addEventListener('keyup', (e) => {
            let isValid = this.validateRegExp['phone'].test(field.value);

            field.dataset.validState = '';
            this.disableRequiredTips();

            if(isValid) {
                this.setSuccessState(field);

            } else {
                this.setErrorState(field);
            }
            this.changeSubmitState();
        });

        field.addEventListener('blur', () => {
            let isValid = this.validateRegExp['phone'].test(field.value);

            if(isValid) {
                this.setSuccessState(field);
                field.dataset.validState = '';

            } else {
                this.setErrorState(field);
                field.dataset.validState = 'error';
            }

        });
    }
}

const app = new FormCreator('application-form');