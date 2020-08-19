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

    setTabEvent(tab) {
        tab.addEventListener( 'click', function() {
            const pageNumber = this.dataset.pageRel;
            const tabNumber = this.dataset.tab;
            const innerTabs = this.closest('.js-tab-wrap').querySelectorAll('[data-tab]');


            console.dir(innerTabs);
        } );
    }

    addTabs() {
        this.tabs.forEach( (el) => {
            this.setTabEvent(el);
        } );
    }





}