const state = {
    'disable': 'result-tabs__tab--disabled'
};
const container = document.querySelector('.result-tabs');
const tabs = container.querySelectorAll('.result-tabs__tab');
const pages = container.querySelectorAll('.result-tabs__page');


tabs.forEach((tab) => {

    tab.addEventListener('click', function(e) {
        e.preventDefault();
        const name = tab.dataset.tab || '';
        const page = container.querySelector(`[data-tabs-page=${name}]`);

        addDisableState(tabs);
        closeAllPages(pages);

        page.style.display = 'block';


        this.classList.remove(state['disable']);
    });
});

function addDisableState(items) {
    items.forEach((item) => {
        item.classList.add(state['disable']);
    });
}

function closeAllPages(pages) {
    pages.forEach((page) => {
        page.style.display = 'none';
    });
}
