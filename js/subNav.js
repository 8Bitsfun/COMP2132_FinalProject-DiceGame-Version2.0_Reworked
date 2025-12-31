let navLinks = $('.nav a');
let _header = $('header');
let DESKTOP_BREAKPOINT = 1107;

function bindDesktopEvents() {
    resetNavState();
    $('#top-nav li').show();
    if (window.innerWidth < DESKTOP_BREAKPOINT) { return; }

    setDesktop_ActiveNavLink();
    setDesktop_ActiveSubNavLink();
    toggleDesktop_SubNavOmHover();
}

function bindMobileEvents() {
    // OPTION 1: FIXED::
    //
    // When these two events are left out the mouse events still active after
    // switching from desktop to mobile viewports.
    navLinks.off('mouseenter.desktop'); // Was missing.
    _header.off('mouseleave.desktop');  // Was missing.

    // // OPTION 2: Does Not Work:
    // // - Since the page starts off on desktop viewport, the desktop immediately binds
    // //   its hover events, then as the viewport changed to mobile, these events are still
    // //   active, therefore hover still exists.
    // if (window.innerWidth >= DESKTOP_BREAKPOINT) return; // Was missing.

    resetNavState();
    toggleMobile_SubNavOnClick();
    setMobile_ActiveSubNavLink();

    // These two events were negating the other due to the .off('mobile') event.
    // - Had to make it a separate event and moved it up above.
    //
    // $('.subNav a').off('mobile').on('click.mobile', function () {
    //     if (window.innerWidth >= DESKTOP_BREAKPOINT) return;
    //
    //     $('.subNav a').removeClass('active-subNavLink');
    //     $(this).addClass('active-subNavLink');
    // });
    // $('.subNav a').off('.mobile').on('click.mobile', function () {
    //     console.log($(this).closest('li').siblings('li').find('a').text());
    // });
    //
    // $('.subNav a').on('click.mobile', function () {
    //     console.log($(this).closest('li').siblings('li').find('a').text());
    // });

}


function setMobile_ActiveSubNavLink() {
    $('.subNav a').on('click.mobile', function () {
        if (window.innerWidth >= DESKTOP_BREAKPOINT) return;

        $('.subNav a').removeClass('active-subNavLink');
        $(this).addClass('active-subNavLink');
    });
}

function toggleMobile_SubNavOnClick() {

    $("#top-nav a").off('.mobile').on('click.mobile', function () {
        if (window.innerWidth >= DESKTOP_BREAKPOINT) {
            return;
        }

        $("#top-nav a").removeClass('active-navLink');
        $(this).addClass('active-navLink');

        $("#top-nav a:not(.active-navLink)").closest('li').hide();

        let index = $(this).data('index');
        let subNav = $(".subNav").eq(index);

        // Hide other subNavs
        $(".subNav").not(subNav).hide();

        // Toggle clicked one
        if (subNav.is(':visible')) {
            $("#top-nav a:not(.active-navLink)").closest('li').show();
            subNav.hide();
        } else {
            subNav.css('display', 'flex'); // mobile layout needs flex.
        }
    });
}

function toggleDesktop_SubNavOmHover() {
    let index;
    navLinks.on('mouseenter.desktop', function () {
        index = navLinks.index(this) + 1;
        navLinks.removeClass('active-overlay');
        $('.subNav').hide();
        $(`.subNav_${index}`).css('display', 'flex');
        $(this).addClass('active-overlay');
    });

    _header.on('mouseleave.desktop', function () {
        $('.subNav').hide();
        navLinks.removeClass('active-overlay');
    });
}

function setDesktop_ActiveSubNavLink() {
    let subNavs = $('.subNav a');
    subNavs.on('click.desktop', function (e) {
        e.preventDefault();
        subNavs.removeClass('active-subNavLink');
        $(this).addClass('active-subNavLink');

        let i = $(this).closest('.subNav').data('index');
        navLinks.removeClass('active-navLink');
        $(navLinks[i]).addClass('active-navLink');
    });
}

function setDesktop_ActiveNavLink() {
    navLinks.on('click.desktop', function (e) {
        e.preventDefault();
        navLinks.removeClass('active-navLink');
        $('.subNav a').removeClass('active-subNavLink');
        $(this).addClass('active-navLink');
    });
}


function resetNavState() {
    $('.subNav').hide();
    $('.subNav a').off('.desktop').off('.mobile');

    $("#top-nav a").show();
    navLinks.removeClass('active-overlay');
    navLinks.off('.desktop').off('.mobile');
}

// After refactoring, this does not work.
//
// $(window).on('load resize', function () {
//
//     $("#top-nav li").show();
//     bindDesktopEvents();
//     bindMobileEvents();
// });

let currentMode = null;
function bindByViewport() {
    let mode =
        window.innerWidth >= DESKTOP_BREAKPOINT ? 'desktop' : 'mobile';

    if (mode === currentMode) return;

    currentMode = mode;
    resetNavState();

    if (mode === 'desktop') {
        bindDesktopEvents();
    } else {
        bindMobileEvents();
    }
}

$(window).on('load resize', bindByViewport);