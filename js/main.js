(function($) {
    'use strict';

 
    $('.moon-toggle').on('click', function() {
        $(".darkwhitemode").toggleClass('lights-is-active'); 
    });
 
    $('.moon-toggle-two').on('click', function() {
        $(".darkwhitemode-two").toggleClass('lights-is-active'); 
    });

    $('.moon-toggle-three').on('click', function() {
        $(".darkwhitemode-three").toggleClass('lights-is-active'); 
    });

})(jQuery);