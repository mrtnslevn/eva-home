(function ($) {
    'use strict';
    $('.item').on("click", function () {
        $(this).next().slideToggle(120);
        $('.accordion-bg').not($(this).next()).slideUp('fast');
    });
}(jQuery));