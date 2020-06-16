class Cart {

    constructor(cartId) {

        this.cart = document.querySelectorAll(`#${cartId}`) || {};
        this.items = document.querySelectorAll(`#${cartId} .cart-table__row`) || {};

        // Init
        this.init();

    }

    init() {
        this.setCounterEvents();
        this.setFavoriteEvent();
    }

    setCounterEvents() {

        for(let counter of this.items) {

            let countField = counter.querySelector('.cart-table__quantity-number');
            let countFieldNumber = +countField.innerText;
            const counterPlusBtn = counter.querySelector('.cart-table__quantity-plus');
            const counterMinusBtn = counter.querySelector('.cart-table__quantity-minus');

            counterPlusBtn.addEventListener('click', (e) => {
                e.preventDefault();
                if(countFieldNumber >= 1) {

                    counterMinusBtn.classList.remove('disabled');
                    countField.innerText = ++countFieldNumber;
                }

            });

            counterMinusBtn.addEventListener('click', (e) => {
                e.preventDefault();
                if(countFieldNumber > 1) {

                    countField.innerText = --countFieldNumber;

                } else {
                    counterMinusBtn.classList.add('disabled');
                }

            });

        }
    }

    setFavoriteEvent() {
        const activeClass = 'active-field';

        for(let obj of this.items) {
            const favoriteBtn = obj.querySelector('.cart-table__item-favorite');
            const item = favoriteBtn.closest('.cart-table__item');

            if(item.classList.contains(activeClass)) {
                favoriteBtn.innerText = 'В избранном';
            }

            favoriteBtn.addEventListener('click', function(e) {
                e.preventDefault();
                if(!this.classList.contains(activeClass)) {
                    item.classList.add(activeClass);
                    this.innerText = 'В избранном';
                }

            });
        }
    }

}

// Init
// Set name of cart by Id
const cart = new Cart('cart');


// --- Promo code ---
const promoField = document.querySelector('.promo__field');
const promoSubmit = document.querySelector('.promo__submit');

promoField.addEventListener('keyup', function(e) {
    e.preventDefault();
    if( this.value.length <= 1 ) {
        promoSubmit.classList.remove('promo__submit--active');
    } else {
        promoSubmit.classList.add('promo__submit--active');
    }
});

// --- Sticky Offer Block ---
var sticky = new Sticky('.cart-checkout')




