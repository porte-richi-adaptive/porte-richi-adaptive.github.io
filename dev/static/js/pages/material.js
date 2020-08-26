// Veneer Tabs
function tabInit() {

    const list = $('.material__veneer-list');
    const dropdown = $('[data-tab-dropdown]');

    $('.material__veneer-item').removeClass('active');
    $('.material__veneer-content').removeClass('active');

    $('.material__veneer-item[data-tab="1"]').addClass('active');
    $('.material__veneer-content[data-page="1"]').addClass('active');

    $('.material__veneer-item[data-tab]').on('click', function() {

        const tabNum = $(this).data('tab');
        const allTabs = $('.material__veneer-item[data-tab]');
        const allPage = $('.material__veneer-content[data-page]');
        const pageActive = $(`.material__veneer-content[data-page=${tabNum}]`);
        const name = $(this).text();

        dropdown.removeClass('opened');
        dropdown.text(name);

        allTabs.removeClass('active');
        $(this).addClass('active');

        allPage.fadeOut(0);
        pageActive.fadeIn();
        pageActive.css('display', 'flex');
    });

    $('[data-tab-dropdown]').on('click', function() {
        if($(this).hasClass('opened')) {
            $(this).removeClass('opened');
            return true;
        }
        $(this).addClass('opened');
    });


}

tabInit();