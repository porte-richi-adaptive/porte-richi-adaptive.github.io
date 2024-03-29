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


    /* --- Material Gallery Pop-Up --- */

    $('.entrance-choose__slide').on('click', function() {

        const materialGalleryCarousel = $(this).closest('.entrance-choose__carousel');
        const materialGalleryCollection = materialGalleryCarousel.find('.entrance-choose__slide');
        const modalCarousel = $('.js-material-gallery-list');
        const gallery = $('.js-material-gallery');
        const sliderIndex = $(this).index();
        let modalCollection = [];


        materialGalleryCollection.each(function(i, el) {
            const item = $(el);
            const itemImg = item.find('img').attr('src');
            const itemName = item.find('.entrance-choose__slide-name').text();
            const itemColor = item.find('.entrance-choose__slide-color').text();
            const result = {
                src: itemImg,
                name: `${itemName}, ${itemColor}`
            };

            modalCollection.push(result);
            return true;
        });

        modalCollection.forEach(function(e, i) {
            const scheme =
             `
                <div class="material-gallery__item">
                    <img src="${e.src}" alt="${e.name}">
                    <span class="material-gallery__name">
                        ${e.name}
                    </span>
                </div>
            `;
            modalCarousel.append(scheme);
        });

        $('.js-material-gallery-list').slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: $('.material-gallery__right'),
            prevArrow: $('.material-gallery__left'),
            dots: true,
        });

        $('.js-material-gallery-list').slick('slickGoTo', sliderIndex);

        gallery.addClass('opened');
        $('body').css('overflow', 'hidden');
    });

    $('.material-gallery__close').on('click', function() {
        const carousel = $('.js-material-gallery-list ');

        carousel.slick('unslick');
        $('.material-gallery__item').remove();
        $('.js-material-gallery').removeClass('opened');
        $('body').css('overflow', 'auto');
    });


    /* --- Item Color Picker --- */
    $('.js-item-color').on('click', function() {
        const src = $(this).data('item-color');
        const pic = $('.js-first-screen');
        const wrap = $(this).closest('.interior-first__colors');
        const coll = wrap.find('.interior-first__color');

        coll.removeClass('interior-first__color--active');
        $(this).addClass('interior-first__color--active');

        pic.fadeOut(250, function() {
            $(this).attr('src',src);
        })
            .fadeIn(250)

    });

    $('.interior-complect__slider')
        .on('init', function(event, slick, currentSlide, nextSlide){
            const res = `${slick.currentSlide + 1} / ${slick.slideCount}`;
            $('.interior-complect__counter ').html(res);
        });


    $('.interior-complect__slider')
        .on('afterChange', function(event, slick, currentSlide, nextSlide){
            const res = `${currentSlide+1} / ${slick.slideCount}`;
            $('.interior-complect__counter ').html(res);
        });

    $('.interior-complect__slider').slick({
        prevArrow: $('.interior-complect__nav-left'),
        nextArrow: $('.interior-complect__nav-right'),
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    $('.interior-complect__item').on('click', function() {
        const activeTabClass = 'interior-complect__item--active';
        const tabNumber = $(this).data('complectTab');
        const contentPage = $(`[data-complect-content=${tabNumber}]`);
        const allTabs = $('.interior-complect__item');
        const allPages = $('[data-complect-content]');

        if( $(this).hasClass(activeTabClass) ) {
            $(this).removeClass(activeTabClass);
            contentPage.slideUp(250);
            return true;
        }

        allTabs.removeClass(activeTabClass);
        allPages.slideUp(250);

        $(this).addClass(activeTabClass);
        contentPage.slideDown(250);

    });

    /* --- Choose Tab  --- */
    $('.interior-choose__item').on('click', function() {

        const items = $('[data-choose-item]');
        const tabs = $('[data-choose-tab]');
        const pages = $('[data-choose-descr]');

        const number = $(this).data('chooseItem');
        const activeTab = $(`[data-choose-tab=${number}]`);
        const activePage = $(`[data-choose-descr=${number}]`);

        items.removeClass('interior-choose__item--active');
        $(this).addClass('interior-choose__item--active');

        activeTab.css("display", "flex");
        tabs.fadeOut(0);
        activeTab.fadeIn(250);

        pages.fadeOut(0);
        activePage.fadeIn(250);

        $('.js-choose-list').removeClass('open');
        $('.interior-choose__dropdown span').text( $(this).text() );

    });

    $('.interior-choose__dropdown').on('click', function() {
        $('.interior-choose__list').toggleClass('open');

    });


    $('.interior-similar__mobile').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: false,
        touchThreshold: 100
    });


    /* --- Scroll To block  --- */
    $(".interior-first__move").on('click', function(){
        $('html, body').animate({
            scrollTop: $(".interior-complect").offset().top
        }, 1500);
    });


    /* --- Extras popup  ---  */
    $('.interior-complete__link').on('click', function() {
        $('body').css('overflow', 'hidden');
        $('.extras__popup').fadeIn(0, function() {
            $(this).css('display', 'flex');
            $('.extras__popup-slider').slick({
                prevArrow: $('.extras__popup-left'),
                nextArrow: $('.extras__popup-right'),
                dots: true
            });
        });
    });

    $('.extras__popup-close').on('click', function() {
        $('.extras__popup').fadeOut(0);
        $('.extras__popup-slider').slick('unslick');
        $('body').css('overflow', 'inherit');

        $('html, body').animate({
            scrollTop: $('.interior-complete').offset().top
        }, 0);
    });



    /* Add for hover in Safari  */
    (function() {
        $("*").on( 'touchstart', function() {
            $(this).trigger('hover') ;
        } ).on('touchend', function() {
            $(this).trigger('hover') ;
        } ) ;
    })();

});

