$(document).ready(function () {
    svg4everybody({});

    // --- Multicolor tip block hover
    $(".js-multicolor-tip").on({

        mouseenter: function() {
            $(this).find('.ui-tip').css("display", "flex").fadeIn();
        },
        mouseleave: function () {
            $(this).find('.ui-tip').fadeOut(0);
        }
    });

    // --- Mobile Menu close
    $('.header__menu > svg').on('click', function(){
        $(this).hide(0);
        $('.header__menu-close').show();
        $('.header__mobile').slideDown(300);
    });

    // --- Mobile Menu open
    $('.header__menu-close').on('click', function(){
        $('.header__menu > svg').show(0);
        $('.header__menu-close').hide();
        $('.header__mobile').slideUp(300);
    });






});


// Полифилы

// forEach IE 11
if ('NodeList' in window && !NodeList.prototype.forEach) {
    console.info('polyfill for IE11');
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}

// closest IE 11
(function () {
    if (!Element.prototype.closest) {
        Element.prototype.closest = function (css) {
            var node = this;
            while (node) {
                if (node.matches(css)) return node;
                else node = node.parentElement;
            }
            return null;
        };
    }
})();

// matches IE 11
(function () {
    if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.matchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector;
    }
})();

//Array.form IE 11
if (!Array.from) {
    Array.from = function (object) {
        'use strict';
        return [].slice.call(object);
    };
}
