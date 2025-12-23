let navLinks = $('.nav a');
let subNavs = $('.sub-nav a');

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
        index = navLinks.index(this) + 1;
        navLinks.removeClass('active-overlay'); // Adds active class to navLink to indicate current active overlay.
        $('.subNav').hide();
        $(`.subNav_${index}`).css('display', 'flex');
        $(this).addClass('active-overlay');
    }
});

subNavs.on('click', 'a', function () {
    // Get the parent subNav's data-index. Keeps track of active index.
    let i = $(this).closest('.subNav').data('index');

    navLinks.removeClass('active-navLink');  // remove from all
    $(navLinks[i]).addClass('active-navLink'); // add to correct top nav link
});

$('header').on('mouseleave', function (e) {
    $('.subNav').css('display', 'none');
    navLinks.removeClass('active-overlay'); // Removes active overlay on navLink on mouseleave.
})

