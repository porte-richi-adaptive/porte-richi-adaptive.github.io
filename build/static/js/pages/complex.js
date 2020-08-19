"use strict";

// Slider arrows
var prevArrowIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"complex__slider-prev complex__slider-arrow\" width=\"32\" height=\"62\" viewBox=\"0 0 32 62\" fill=\"none\"><path d=\"M31 61L1 31 31 1\" style=\"stroke-linejoin:round;stroke-width:2;\"/></svg>";
var nextArrowIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\"  class=\"complex__slider-next complex__slider-arrow\" width=\"32\" height=\"62\" viewBox=\"0 0 32 62\" fill=\"none\"><path d=\"M1 61L31 31 1 1\" style=\"stroke-linejoin:round;stroke-width:2;\"/></svg>"; // Slider Init

$('.complex__slider-container').slick({
  infinite: true,
  dots: false,
  variableWidth: true,
  slidesToShow: 1,
  prevArrow: prevArrowIcon,
  nextArrow: nextArrowIcon
});
var tabs = new tabsBuilder();
console.dir(tabs);