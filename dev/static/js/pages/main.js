// Jumbo Slider

const prevBtn = $('.main__jumbo-left');
const nextBtn = $('.main__jumbo-right');
const jumboSlider = $('.main__jumbo-slider');

jumboSlider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var i = (currentSlide ? currentSlide : 0) + 1;
    $('.main__jumbo-numbers').html( '<span class="current_slide">' + i + '</span> / <span class="total_slides"> ' + slick.slideCount + '</span>');
});

jumboSlider.slick({
    prevArrow: prevBtn,
    nextArrow: nextBtn,
    rtl: true
});

nextBtn.click(function(){
    $('.main__jumbo-container').slick('slickNext');
});

prevBtn.click(function(){
    $('.main__jumbo-container').slick('slickPrev');
});

$('.main__jumbo-container').slick({
    arrows: false,
    slidesToShow: 1
});
