let params = location
    .search
    .replace('?','')
    .split('&')
    .reduce(
        function(p,e){
            var a = e.split('=');
            p[ decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
            return p;
        },
        {}
    );

$('.blog__hash').on('click', function() {
    const activeClass = 'blog__hash--active';

    if( $(this).hasClass(activeClass) ) {
        $(this).removeClass(activeClass);
        return true;
    }

    $('.blog__hash').removeClass(activeClass);
    $(this).addClass(activeClass);
});

if(params.tag) {
    let tagEl = $(`.blog__cloud .blog__hash[data-code="${params.tag}"]`);
    tagEl.trigger('click');
    tagEl.attr('href', window.location.pathname);
}

let hashArray = [];
$('[data-weight]').each(function(i, e) {
    const weight = $(e).data('weight');
    hashArray.push(weight);
});

hashArray.sort(function(a, b) {
    return a - b;
});


const dataGroupNumber = $('[data-group]').length - 1;

$('input[type="range"]').attr({
    "max" : dataGroupNumber,
    "min" : 1,
    "value": dataGroupNumber
});


$('input[type="range"]').rangeslider({
    polyfill : false,
    onInit : function() {
        this.output = $( '<div class="range-output" />' ).insertAfter( this.$range ).html( this.$element.val() );
    },
    onSlide : function( position, value ) {
        this.output.html( value );
        $('.blog__hash:not(.blog__hash--active)').each(function(i, el) {
            let groupNumber = $(el).data('group');
            if(groupNumber > value) {
                $(el).fadeOut();
            } else {
                $(el).fadeIn();
            }

        });
    }
});