$(document).ready(function() {
    function checkIfInView() {
        var windowTop = $(window).scrollTop();
        var windowBottom = windowTop + $(window).height();

        $('section').each(function() {
            var sectionTop = $(this).offset().top;
            var sectionBottom = sectionTop + $(this).height();

            if (sectionBottom >= windowTop && sectionTop <= windowBottom) {
                $(this).addClass('in-view');
            } else {
                $(this).removeClass('in-view');
            }
        });
    }

    $(window).on('scroll', checkIfInView);
    checkIfInView();
});
