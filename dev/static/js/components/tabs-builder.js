

/*
    tab class js-tab
    set rel dataName for pages
*/

class tabsBuilder {
    constructor(tabDataName) {
        this.tabs = document.querySelectorAll('[data-tab]');


        this.init();
    }

    init() {
        this.addTabs();

    }

    removeActiveClass(list, activeClass) {
        list.forEach( (el) => {
            el.classList.remove(activeClass);
        });
    }


    setTabEvent(tab) {
        const self = this;

        tab.addEventListener( 'click', function() {
            const tabActiveClass = 'active-tab';
            const pageActiveClass = 'active-page';
            const pageNumber = this.dataset.pageRel;
            const tabNumber = this.dataset.tab;
            const innerTabs = this.closest('.js-tab-wrap').querySelectorAll('[data-tab]');
            const pageList = document.querySelectorAll(`.tabs__page[data-page-rel="${pageNumber}"]`);
            const currPage = document.querySelector(`.tabs__page[data-page="${tabNumber}"]`);

            self.removeActiveClass(innerTabs, tabActiveClass);
            this.classList.add(tabActiveClass);

            self.removeActiveClass(pageList, pageActiveClass);
            currPage.classList.add(pageActiveClass);


        } );
    }

    addTabs() {
        this.tabs.forEach( (el) => {
            this.setTabEvent(el);
        } );
    }





}