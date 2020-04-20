// $(document).ready(function () {
    //NAV

    $('.burger-icon').hover(function () {
        TweenMax.to('.burger-line:first-child', 0.2, { x: -10, y: 9, rotation: 45 });
        TweenMax.to('.burger-line:nth-child(2)', 0.2, { x: 1000 });
        TweenMax.to('.burger-line:last-child', 0.2, { x: 10, y: -8, rotation: -45 });

    },
        function () {
            TweenMax.to('.burger-line:first-child', 0.2, { x: 0, y: 0, rotation: 0 });
            TweenMax.to('.burger-line:nth-child(2)', 0.2, { x: 0 });
            TweenMax.to('.burger-line:last-child', 0.2, { x: 0, y: 0, rotation: 0 });

        });



    $('.close-button').hover(function () {
        TweenMax.set('.close-line:first-child', { x: 5, y: 10, rotation: 45 });
        TweenMax.set('.close-line:last-child', { x: 5, y: 1, rotation: -45 });
    },
        function () {
            TweenMax.set('.close-line:first-child', { x: 5, y: 10, rotation: 45 });
            TweenMax.set('.close-line:last-child', { x: 5, y: 1, rotation: -45 });
        });



    var tlmenu = new TimelineMax({ paused: true });

    tlmenu.to('.burger-nav', 0.3, { autoAlpha: 1 })
        .staggerFromTo('.burger-nav li', 0.5, { y: 100, opacity: 0 }, { y: 0, opacity: 1 }, 0.1);

    $('.burger-icon').click(function () {
        tlmenu.play(0);
    });

    $('.close-button').click(function () {
        tlmenu.reverse(0);
    });

    // Hero Section

    TweenMax.fromTo('#hero h1', 0.6, { y: 80, opacity: 0 }, { y: 0, opacity: 1, delay: 1 });

    TweenMax.fromTo('#hero h2', 0.6, { y: 80, opacity: 0 }, { y: 0, opacity: 1, delay: 1.6, ease: Back.easeOut.config(2) })


    $(".item").on("click", function () {
        $(".burger-nav").css('display', 'none');
    });


    $(".burger-icon").on("click", function () {
        $(".burger-nav").css('display', 'flex');
    });

// })
