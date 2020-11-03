document.addEventListener("DOMContentLoaded", function(event) {

    const modal = document.querySelectorAll('[data-simple-modal]');
    const triggerBtn = document.querySelectorAll('[data-trigger-btn]');
    const closeBtns = document.querySelectorAll('[data-simple-close]');
    const containers = document.querySelectorAll('[data-simple-container]');


    function initModal() {
        setTriggerEvent(triggerBtn);
        setCloseModalEvent(closeBtns, containers);
    }

    
    function setTriggerEvent(buttons = []) {

        buttons.forEach( item => {
            const modalDataName = item.dataset['triggerBtn'];
            const relModal = document.querySelector(`[data-simple-modal=${modalDataName}]`);
            const imgSrc = item.dataset.imgSrc;
            const img = relModal.querySelector('[data-simple-img]');

            item.addEventListener('click', e => {
                openModal(relModal);
                img.src = imgSrc;
            });
        });
    }

    function openModal(modal=[], openClass = 'opened') {
        modal.classList.add(openClass);
    }


    function setCloseModalEvent( closeBtns, container ) {

        container.forEach(item => {
            item.addEventListener('click', e => {
                const curr = e.target;
                const modal = item.closest('[data-simple-modal]');
                const img = modal.querySelector('[data-simple-img]');

                if(curr.classList.contains('simple-modal__container')) {
                    modal.classList.remove('opened');
                    img.src = null;
                }
            });
        });

        closeBtns.forEach(item => {
            item.addEventListener('click', e => {
                const modal = item.closest('[data-simple-modal]');
                const img = modal.querySelector('[data-simple-img]');
                modal.classList.remove('opened');
                img.src = null;
            });
        });
    }


    initModal();
});