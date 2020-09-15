// Slider arrows
const prevArrowIcon = `<svg xmlns="http://www.w3.org/2000/svg" class="complex__slider-prev complex__slider-arrow" width="32" height="62" viewBox="0 0 32 62" fill="none"><path d="M31 61L1 31 31 1" style="stroke-linejoin:round;stroke-width:2;"/></svg>`;
const nextArrowIcon = `<svg xmlns="http://www.w3.org/2000/svg"  class="complex__slider-next complex__slider-arrow" width="32" height="62" viewBox="0 0 32 62" fill="none"><path d="M1 61L31 31 1 1" style="stroke-linejoin:round;stroke-width:2;"/></svg>`;

class Modal {
    constructor() {
        this.modal = document.querySelectorAll('[data-modal]');
        this.$sliderModal = $('.modal__slider');
        this.triggerBtn = document.querySelectorAll('[data-modal-trigger]');
        this.closeBtn = document.querySelector('.modal__close');
        this.isInit = false;
        this.init();
    }

    init() {
        this.triggerEvent();
        this.closeModalEvent();
    }

    triggerEvent() {
        const self = this;
        this.triggerBtn.forEach((btn) => {
            btn.addEventListener('click', function() {
                const modalNum = this.dataset.modalTrigger;
                const modalPage = document.querySelector(`[data-modal="${modalNum}"]`);

                if(!self.isInit) {
                    self.initCarousel();
                    self.isInit = true;
                }

                modalPage.classList.add('opened');
                document.body.classList.add('js-modal-window-opened');


            });
        });
    }

    closeModalEvent() {
        const self = this;
        this.closeBtn.addEventListener('click', function() {
            self.modal.forEach((modal) => {
                modal.classList.remove('opened');
            });

             document.body.classList.remove('js-modal-window-opened');

        });
    }

    initCarousel() {
        this.$sliderModal.slick({
            slidesToShow: 1,
            prevArrow: prevArrowIcon,
            nextArrow: nextArrowIcon,
            responsive: [
                {
                    breakpoint: 1195.98,
                    settings: {
                        arrows: false
                    }
                }
            ]
        });
    }


}

new Modal;