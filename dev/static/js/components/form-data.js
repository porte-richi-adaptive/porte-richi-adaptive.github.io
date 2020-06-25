class FormData {
    constructor(formName) {
        this.form = document.querySelector(`#${formName}`);
        this.phoneField = document.querySelector(`[data-form-valid='phone']`);
        this.submitBtn = document.querySelectorAll('.cart-checkout__submit');
        this.fields = document.querySelectorAll(`#${formName} .js-form-validation`);
        this.requiredFields = document.querySelectorAll('[data-require-field]');
        this.errorText = {
            name: {
                success: '',
                error: 'Мы не сможем обратиться к вам по этому имени'
            },
            phone: {
                success: '',
                error: 'Не дозвонимся по этому номеру и не сможем уточнить детали заказа '
            } ,
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

    init() {
        this.checkRequiredFields(this.requiredFields);
        this.initPhoneMask();
        this.addFieldEvents();
        this.setSmoothScrolling();
    }

    initPhoneMask() {
        if(this.phoneField !== null) {
            Inputmask({"mask": "+ 375 (99) 999-99-99"}).mask(this.phoneField);
        }
    }

    checkRequiredFields(fields) {
        let fieldsRequiredCounter =  0;


        for(let field of fields) {
            if( field.dataset.requireField === 'true' ) {
                ++fieldsRequiredCounter;
            }
        }
        if(fieldsRequiredCounter === fields.length) {
            for(let btn of this.submitBtn) {
                btn.classList.remove('cart-checkout__submit--disabled');
            }

            return true;
        }
        for(let btn of this.submitBtn) {
            btn.classList.add('cart-checkout__submit--disabled');
        }

    }

    setSmoothScrolling() {
        const submitBtns = document.querySelectorAll('.js-form-submit');
        for(let btn of submitBtns) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();

                if(btn.classList.contains('cart-checkout__submit--disabled')) {
                    this.form.scrollIntoView({
                        behavior: 'smooth'
                    });
                }

            });
        }
    }

    nameValidation(value) {
        if(value.length > 1) {
            return true;
        }
    }

    validate(value, type) {
        if( type === 'name') {
            return this.nameValidation(value);
        }
        return this.validateReg[type].test(value);
    }

    setErrorText(type) {
        return this.errorText[type].error;
    }

    setSuccessText(type) {
        return this.errorText[type].success;
    }

    addFieldEvents() {
        const self = this;
        for( let field of this.fields) {

            field.addEventListener('keyup', function() {

                const validType = this.dataset.formValid;
                const isValid = self.validate(this.value, validType);
                const fieldErrorStr = 'form-data__field--error';
                const field = this.closest('.form-data__field');
                const errorField = field.querySelector('.form-data__error');

                // If not validate
                if(!isValid) {
                    field.classList.add(fieldErrorStr);
                    errorField.innerText = self.setErrorText(validType);
                    this.dataset.requireField = false;
                }
                else {
                    field.classList.remove(fieldErrorStr);
                    errorField.innerText = self.setSuccessText(validType);
                    this.dataset.requireField = true;
                }

                self.checkRequiredFields(self.requiredFields);

            });

        }
    }

}



// Init
new FormData('formData').init();