$('.nav a').on('click', function (e) {
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