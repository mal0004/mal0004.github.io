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

    // Fonction pour basculer entre les thèmes clair et sombre
    $("#themeToggle").on("click", function() {
        $("body").toggleClass("dark-theme");
        const currentTheme = $("body").hasClass("dark-theme") ? "dark" : "light";
        localStorage.setItem("theme", currentTheme); // sauvegarder le thème choisi dans le stockage local
    });

    // Vérifier le stockage local pour voir si un thème a été préalablement choisi
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        if (savedTheme === "dark") {
            $("body").addClass("dark-theme");
        } else {
            $("body").removeClass("dark-theme");
        }
    }
});
