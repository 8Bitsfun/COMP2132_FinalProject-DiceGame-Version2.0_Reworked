let navLinks = $('.nav a');
// let subNavs = $('.subNav a'); /* Does not work as a global variable. */
let subNavs = $('.subNav a');
let _header = $('header');

let DESKTOP_BREAKPOINT = 1107;

function displayDesktopSubNav() {
    resetSubNavState();
    if (window.innerWidth < DESKTOP_BREAKPOINT) return;

    // Clear previous desktop bindings (important!)
    navLinks.off('.desktop');
    subNavs.off('.desktop');
    _header.off('.desktop');


    navLinks.on('click.desktop', function (e) {
        e.preventDefault(); // remove if you want normal navigation
        $('.nav a').removeClass('active-navLink'); // remove active-navLink from all links
        $('.subNav a').removeClass('active-subNavLink');
        $(this).addClass('active-navLink'); // set active-navLink on clicked link

    });


    subNavs.on('click.desktop', function (e) {
        e.preventDefault();
        $('.subNav a').removeClass('active-subNavLink');
        $(this).addClass('active-subNavLink');
    });

    let index;
    navLinks.on( {
        'mouseenter.desktop': function (e) {
            e.preventDefault();
            index = navLinks.index(this) + 1;
            navLinks.removeClass('active-overlay'); // Adds active class to navLink to indicate current active overlay.
            $('.subNav').hide();
            $(`.subNav_${index}`).css('display', 'flex');
            // Highlights the active top navLink.
            $(this).addClass('active-overlay');
        }
    });

// UPDATE 1: TYPO!!!
// - See below for comments.
// Not entirely sure why this needs to be encapsulated with the document.ready function, otherwise,
// this event does not get triggered or triggered properly.
// - The above code for the navLinks events does not need to be encapsulated with the document.ready
//   function yet this one does.
// - It appears that when the page loads, the top navs are already processed and thus the top navLinks
//   event is able to trigger without fault.
// - When the .subNavs variable is declared outside as in declared as a global variable, it does not
//   find any of the anchor elements yet; so it binds to nothing thus empty.
// - Keynote:
//   - Event binding happens at declaration time, not at user interaction time.
// UPDATE 2:
// - Since the javascript file is set to defer, the .document.ready function is not necessary here.
//
// $(document).ready(function() {
//     // UPDATE: .sub-nav is a typo, need to use .subNav instead!!
//     // - That is why this did not work - a typo.
//     let subNavs = $('.sub-nav a'); // Works as a local variable. Needs to be within the document.ready function.
//     subNavs.on('click', function() {
//         let i = $(this).closest('.subNav').data('index');
//         navLinks.removeClass('active-navLink');
//         $(navLinks[i]).addClass('active-navLink');
//     });
// });

    subNavs.on('click.desktop', function() {
        // - Finds the closest ancestor and assign its data-index value to variable.
        // - This value coincidentally corresponds to the index value of the navLinks,
        //   therefore it is sued to toggle the .active-navLink styles.
        let i = $(this).closest('.subNav').data('index');
        navLinks.removeClass('active-navLink'); // Removes any active navLinks.
        // Also highlights active navLink when any of the anchor links are clicked within
        // the active overlay div.
        $(navLinks[i]).addClass('active-navLink');
    });

    _header.on('mouseleave.desktop', function (e) {
        e.preventDefault();
        $('.subNav').css('display', 'none');
        navLinks.removeClass('active-overlay'); // Removes active overlay on navLink on mouseleave.
    })

}

function resetSubNavState() {
    // Hide everything
    $('.subNav').hide();
    navLinks.removeClass('active-overlay active-navLink');
    $('.subNav a').removeClass('active-subNavLink');

    // Remove all previous event handlers
    navLinks.off('.desktop').off('.mobile');
}

$(window).on('load resize', function () {
    displayDesktopSubNav();
});
