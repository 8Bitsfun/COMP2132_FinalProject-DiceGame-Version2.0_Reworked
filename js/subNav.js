let navLinks = $('.nav a');

navLinks.on('click', function (e) {
    e.preventDefault(); // remove if you want normal navigation
    $('.nav a').removeClass('active-navLink'); // remove active-navLink from all links
    $('.subNav a').removeClass('active-subNavLink');
    $(this).addClass('active-navLink'); // set active-navLink on clicked link

});

$('.subNav a').on('click', function (e) {
    e.preventDefault();
    $('.subNav a').removeClass('active-subNavLink');
    $(this).addClass('active-subNavLink');
});

let index;
navLinks.on( {
    mouseenter: function (e) {

        // I wanted a way to keep track of the index of the nav links in the top header.
        // - Using this index, I can map it to the specific .subNav class in order to
        //   apply a toggle effect to show/hide its div container.
        //
        // let index = navLinks.index(this);
        // $('.subNav').hide();
        //
        // if (index === 0) {
        //     $('.subNav_1').css('display', 'flex');
        // }
        //
        // if (index === 1) {
        //     $('.subNav_2').css('display', 'flex');
        // }
        //
        // if (index === 2) {
        //     $('.subNav_3').css('display', 'flex');
        // }

        // let index = navLinks.index(this) + 1;
        index = navLinks.index(this) + 1;
        // This version is a more refined than the previous attempt.
        navLinks.removeClass('active-overlay'); // Adds active class to indicate current active overlay.
        $('.subNav').hide();
        $(`.subNav_${index}`).css('display', 'flex');
        $(this).addClass('active-overlay');

        // Events stack, not recommended to put click event inside mouse event.
        $(`.subNav_${index} a`).on('click', function (e) {
            console.log(index - 1);

            // console.log(navLinks[index - 1].textContent);
            navLinks.removeClass('active-navLink');
            // navLinks[index - 1].addClass('active-navLink');
            $(navLinks[index - 1]).addClass('active-navLink');
        });
    }
});

// $(`.subNav_${index} a`).on('click', function (e) {
//     console.log(index - 1);
//
//     // console.log(navLinks[index - 1].textContent);
//     navLinks.removeClass('active-navLink');
//     // navLinks[index - 1].addClass('active-navLink');
//     $(navLinks[index - 1]).addClass('active-navLink');
// });

$('header').on('mouseleave', function (e) {
    $('.subNav').css('display', 'none');
    navLinks.removeClass('active-overlay'); //
})

