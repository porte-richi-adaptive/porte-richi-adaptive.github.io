// Veneer Tabs
function tabInit() {

    $('.material__veneer-item').removeClass('active');
    $('.material__veneer-content').removeClass('active');

    $('.material__veneer-item[data-tab="1"]').addClass('active');
    $('.material__veneer-content[data-page="1"]').addClass('active');

    $('.material__veneer-item[data-tab]').on('click', function() {

        const tabNum = $(this).data('tab');
        const allTabs = $('.material__veneer-item[data-tab]');
        const allPage = $('.material__veneer-content[data-page]');
        const pageActive = $(`.material__veneer-content[data-page=${tabNum}]`);

        allTabs.removeClass('active');
        $(this).addClass('active');

        allPage.fadeOut(0);
        pageActive.fadeIn();
        pageActive.css('display', 'flex');
    });


}

tabInit();