const phone = document.querySelector('.js-phone-mask');
const submit = document.querySelector('.js-callback-submit');
const regValid = /^\+ 375 \([0-9]{2}\) [0-9]{3}-[0-9]{2}-[0-9]{2}$/;


Inputmask({"mask": "+ 375 (99) 999-99-99"}).mask(phone);

phone.addEventListener('keyup', function() {
    const isValid = regValid.test(this.value);
    if(isValid) {
        submit.classList.remove('disabled');
        return true;
    }
    submit.classList.add('disabled');
});

submit.addEventListener('click', function(e) {
    e.preventDefault();
    if(!phone.classList.contains('error')) {
        phone.classList.remove('error');
    } else {
        phone.classList.add('error');
    }
});