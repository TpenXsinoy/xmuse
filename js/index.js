$('.img-slider1').slick({
    dots:true,
    adaptiveHeight: true
});

$(document).ready(function(){
    var $window = $('body');
    var $deer1 = $('.deer1');
    var $deer2 = $('.deer2');
    var $trees = $('.trees');
    var $snow = $('.section-wrapper');

    var scroll_max = $(document).height() - $window.height();
    var wrapper_height = $('#first').height();
    var wrapper_width = $('#first').width();

    $window.on("scroll", function() {
        $snow.css({
            'background-position-y': ($window.scrollTop() / scroll_max) * wrapper_height*10
        });

        $deer1.css({
            'bottom': ((($window.scrollTop()) / scroll_max) * (wrapper_height*10)),
            'right': ($window.scrollTop() / scroll_max) * wrapper_height*10
        });

        $deer2.css({
            'bottom': ((($window.scrollTop()) / scroll_max) * wrapper_height*10),
            'left': ($window.scrollTop() / scroll_max) * wrapper_height*10
         });

         $trees.css({
            'background-position-x': -($window.scrollTop() / scroll_max) * wrapper_height*10
        });
    });
});