const modal = document.querySelector('.js-map-modal');
const openModalBtns = document.querySelectorAll('.js-modal-open');
const body = document.querySelector('body');
const closeBtn = modal.querySelector('.js-modal-close');
const wrap = modal.querySelector('.js-modal-wrap');
const points = modal.querySelectorAll('.js-modal-point');
const mapImg = modal.querySelector('.salons__modal-img');

openModalBtns.forEach((btn) => {
    btn.addEventListener('click', function() {
        modal.classList.add('modal-open');
        body.classList.add('js-modal-open');
    });
});

closeBtn.addEventListener('click', function() {
    modal.classList.remove('modal-open');
    body.classList.remove('js-modal-open');
});

wrap.addEventListener('click', function(e) {
    if(e.target === mapImg) {
        points.forEach((item) => {
            item.querySelector('input').checked = false;
        });
    }
});

modal.addEventListener('click', function(e) {
    if(e.target === this) {
        modal.classList.remove('modal-open');
        body.classList.remove('js-modal-open');
    }
});