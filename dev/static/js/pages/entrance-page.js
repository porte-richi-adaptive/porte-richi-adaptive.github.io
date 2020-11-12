$(document).ready(function() {


    function removeClass (collection , classForRemove ) {
        collection.forEach((item) => {
            item.classList.remove(classForRemove);
        });
    }

    const tabs = document.querySelectorAll('[data-tab-item]');
    const img = document.querySelectorAll('[data-tab-img]');
    const block = document.querySelectorAll('[data-tab-block]');
    const dropdown = $('[data-js-choose]');
    const activeTab = $('.entrance-variant__list--active').text();

    dropdown.find('.entrance-variant__choose-name').text(activeTab);

    dropdown.on('click tap', function() {
        $('.entrance-variant__tabs').toggleClass('opened');

    });
    

    tabs.forEach(function(item) {

        item.addEventListener('click', function() {
            if(item.classList.contains('entrance-variant__list--active')) {
                return false;
            }

            dropdown.find('.entrance-variant__choose-name').text( $(item).text() );
            $('.entrance-variant__tabs').removeClass('opened');

            const tabNumber = $(item).data('tab-item');

            removeClass(tabs, 'entrance-variant__list--active');
            item.classList.add('entrance-variant__list--active');

            $(img).fadeOut(0);
            $(block).fadeOut(0);

            $(`[data-tab-img=${tabNumber}]`).fadeIn(250);
            $(`[data-tab-block=${tabNumber}]`).fadeIn(250);
        });
    });





// -- Choose Carousel -- //

const activeItemClass = 'entrance-choose__item--active';
const allCarousels = $('[data-choose-carousel]');



allCarousels.each(function() {

    const carousel = $(this).find('.entrance-choose__carousel');
    const innerPagination = $(this).find('.entrance-choose__numbers');
    const arrows = $(this).find('.entrance-choose__arrows');

    carousel.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        if(!slick.$dots){
            return;
        }

        var i = (currentSlide ? currentSlide : 0) + 1;
        innerPagination.text(i + '/' + (slick.$dots[0].children.length));
    });

    const chooseOptions = {
        infinite: false,
        slidesToShow: 2,
        nextArrow: arrows.find('.entrance-choose__arrows-right'),
        prevArrow: arrows.find('.entrance-choose__arrows-left'),
        dots: true,
        responsive: [
            {
                breakpoint: 1195,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    carousel.slick(chooseOptions);
});


const materialChooseDropDown = $('[data-js-material]');
materialChooseDropDown.find('.entrance-variant__choose-name').text( $('.entrance-choose__item--active .entrance-choose__name').text() );

$('.entrance-choose__tip').text( $('.entrance-choose__item--active .entrance-choose__descr').text() );
materialChooseDropDown.on('click', function() {
    $('.entrance-choose__list').toggleClass('opened');
});


$('.entrance-choose__item').on('click', function() {
    const chooseNum = $(this).data('choose-tab');

    if( $(this).hasClass(activeItemClass) ) {
        return false;
    }

    $('.entrance-choose__tip').text( $('.entrance-choose__item--active .entrance-choose__descr').text() );
    materialChooseDropDown.find('.entrance-variant__choose-name').text( $(this).find('.entrance-choose__name').text() );
    $('.entrance-choose__list').removeClass('opened');


    $('.entrance-choose__item').removeClass(activeItemClass);
    $(this).addClass(activeItemClass);

    $('[data-choose-carousel]').removeClass('entrance-choose__right--active');
    $(`[data-choose-carousel=${chooseNum}]`).addClass('entrance-choose__right--active');

});

// -- Entrance Level Carousel -- //

const entranceOptions = {
    variableWidth: true,
    infinite: false,
    slidesToShow: 3,
    nextArrow: $('.entrance-level__arrows-right'),
    prevArrow: $('.entrance-level__arrows-left'),
    dots: false,
    responsive: [
        {
            breakpoint: 1195,
            settings: {
                variableWidth: true,
                swipeToSlide: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                touchThreshold: 500
            }
        }
    ]
};

$('.entrance-level__slider').slick(entranceOptions);

// -- Comments Carousel -- //
$('.comments__list').slick({
    slidesToShow: 1,
    infinite: false,
    nextArrow: $('.comments__right'),
    prevArrow: $('.comments__left'),
    variableWidth: true,
    responsive: [
        {
            breakpoint: 1195,
            settings: {
                variableWidth: true,
                swipeToSlide: true,
                slidesToScroll: 1,
                touchThreshold: 100
            }
        }
    ]
});

// -- Defence tabs -- //

const defenceTabs = $('[data-defence-tab]');
const defenceTabsPages = $('[data-defence-page]');
const defenceActiveTabClass = 'entrance-defence__item--active';
const defenceActiveTab = $('.entrance-defence__item--active');
const defenceTabsPicture = $('[data-defence-img]');
const defenceDropdown = $('[data-js-defence]');

defenceDropdown.find('.entrance-variant__choose-name').text( defenceActiveTab.text() );

defenceDropdown.on('click', function() {
    $('.entrance-defence__over').toggleClass('opened');
});

defenceTabs.on('click', function() {
    const tabNumber = $(this).data('defence-tab');
    const page = $(`[data-defence-page=${tabNumber}]`);
    const img = $(`[data-defence-img=${tabNumber}]`);

    $('.entrance-defence__over').removeClass('opened');
    defenceDropdown.find('.entrance-variant__choose-name').text( $(this).text() );

    defenceTabsPages.fadeOut(0);
    page.fadeIn();

    defenceTabsPicture.fadeOut(0);
    img.fadeIn();

    defenceTabs.removeClass(defenceActiveTabClass);
    $(this).addClass(defenceActiveTabClass);

});

/* --- First screen, colors carousel --- */

    $(window).on('load resize orientationchange', function() {
        $('.js-colors-c').each(function(){
            var $carousel = $(this);
            if ($(window).width() > 856) {
                if ($carousel.hasClass('slick-initialized')) {
                    $carousel.slick('unslick');
                }
            }
            else{
                if (!$carousel.hasClass('slick-initialized')) {
                    $carousel.slick({
                        slidesToShow: 6,
                        slidesToScroll: 1,
                        mobileFirst: true,
                        dots: false,
                        arrows: false,
                        variableWidth: true,
                        infinite: false
                    });
                }
            }
        });
    });

    /* --- Rotate Image on First Screen --- */
    $('.js-item-resfresh').on('click', function() {
        const wrapper = $(this).closest('.js-facade');
        const frontDescr = wrapper.find("[data-facade=front]");
        const backDescr = wrapper.find("[data-facade=back]");
        const openClass = 'js-facade-opened';

        if( frontDescr.hasClass(openClass) ) {

            frontDescr.fadeOut(0);
            backDescr.fadeIn(250);

            frontDescr.removeClass(openClass);
            backDescr.addClass(openClass);

        } else {

            backDescr.fadeOut(0);
            frontDescr.fadeIn(250);

            backDescr.removeClass(openClass);
            frontDescr.addClass(openClass);
        }


        $(this).find('.js-item-rotate').toggleClass('rotate');
    });

    /* --- Search Tabs --- */

    const searchTabs = $('[data-search-tab]');
    const activeTabClass = 'entrance-search__item--active';
    const searchEntranceSection = $('.entrance-search');
    const searchEntrancePages = $('[data-search-page]');

    searchEntrancePages.each(function(i, el) {
        const carousel = $(el).find('.entrance-search__carousel');

        const nextArrow = $(el).find('.entrance-search__arrows-right');
        const prevArrow = $(el).find('.entrance-search__arrows-left');

        const searchTabsOptions = {
            variableWidth: true,
            infinite: false,
            slidesToShow: 2,
            slidesToScroll: 2,
            nextArrow: nextArrow,
            prevArrow: prevArrow,
            dots: false,
            responsive: [
                {
                    breakpoint: 856,
                    settings: {
                        variableWidth: true,
                        swipeToSlide: true,
                        slidesToScroll: 1,
                        slidesToShow: 1,
                        touchThreshold: 100
                    }
                }
            ]
        };

        carousel.slick(searchTabsOptions);
    });


    searchTabs.removeClass(activeTabClass);
    searchTabs.first().addClass(activeTabClass);

    searchTabs.on('click', function() {
        const tabNumber = $(this).data('search-tab');
        const activePage = $(`[data-search-page=${tabNumber}]`);
        const activeDescr = $(`[data-search-block=${tabNumber}]`);

        if( $(this).hasClass(activeTabClass) ) {
            return false;
        }

        $('[data-search-block]').removeClass('entrance-search__view--open');;
        activeDescr.addClass('entrance-search__view--open');

        searchEntrancePages.removeClass('opened');
        activePage.addClass('opened');

        searchTabs.removeClass(activeTabClass);
        $(this).addClass(activeTabClass);

       $('.entrance-search__controll').removeClass('opened');
       $('.entrance-search__dropdown-text ').text( $(this).text() );

    });

    $('.entrance-search__dropdown').on('click', function() {
        $('.entrance-search__controll').toggleClass('opened');
    });




});

