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

    $("#themeToggle").on("click", function() {
        $("body").toggleClass("dark-theme");
        const currentTheme = $("body").hasClass("dark-theme") ? "dark" : "light";
        localStorage.setItem("theme", currentTheme);
        updateThemeIcon();
    });

    function updateThemeIcon() {
        if ($("body").hasClass("dark-theme")) {
            $("#themeToggle i").removeClass("fas fa-moon").addClass("fas fa-sun");
        } else {
            $("#themeToggle i").removeClass("fas fa-sun").addClass("fas fa-moon");
        }
    }

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        if (savedTheme === "dark") {
            $("body").addClass("dark-theme");
        } else {
            $("body").removeClass("dark-theme");
        }
        updateThemeIcon();
    }
});

