class FormData {
    constructor(formName) {
        this.form = document.querySelector(`#${formName}`);
        this.fields = document.querySelectorAll(`#${formName} .js-form-validation`);
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
                success: '',
                error: 'Не сможем отправить письмо с подтверждением заказа на этот адрес'
            }
        };
        this.validateReg = {
            phone: /^\+375 [0-9]{2} [0-9]{3}-[0-9]{2}-[0-9]{2}$/,
            mail: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        };


    }

    init() {
        this.addFieldEvents();
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
                }
                else {
                    field.classList.remove(fieldErrorStr);
                    errorField.innerText = self.setSuccessText(validType);
                }

            });

        }
    }

}

// Init
new FormData('formData').init();