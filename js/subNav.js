let navLinks = $('.nav a');
let _header = $('header');
let DESKTOP_BREAKPOINT = 1107;

function bindDesktopEvents() {
    resetNavState();

    // - Since adding the mode dispatcher and removing the old windows resize event,
    //   the $('#top-nav li') links were not correctly showing when in mobile, where
    //   after clicking on mobile top-nav links once, and the immediately switching
    //   back to desktop, the nav links disappeared.
    // - With this fix, it restores the nav links list to full size.
    $('#top-nav li').show(); // Was missing.
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
    //
    // if (window.innerWidth >= DESKTOP_BREAKPOINT) return; // Was missing.

    resetNavState();
    toggleMobile_SubNavOnClick();
    setMobile_ActiveSubNavLink();
    toggleMobile_SubNavLinkOnClick();

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

function toggleMobile_SubNavLinkOnClick() {
    $('.subNav a').off('.mobile').on('click.mobile', function () {
        if (window.innerWidth >= DESKTOP_BREAKPOINT) return;

        let clicked = $(this);

        // Feature              .first()                        .is(':first-child')
        //
        // Returns              JQuery Object                   Boolean
        // Purpose              Select the first element        Test if element is first child
        // Use when             You need the element itself     You need a YES/NO test
        // Example Use Case     Compare with clicked element    Conditional logic in click handler

        // DOES NOT WORK:
        //
        // if (clicked.closest('li').parent().first().children('li')) {
        //     console.log("First");
        // }

        // DOES NOT WORK:
        // - It does not return a boolean, rather returns a JQuery array-like object.
        // if (clicked.closest('li').parent().children('li').first()) {
        //     console.log('First li clicked');
        // }

        // DOES NOT WORK:
        // - What is the difference?
        //
        // clicked.closest('li').parent().children('li').first();
        // clicked.closest('li').parent().first().children('li');

        // WORKS: Option A
        // - The .index() finds the position of the element among its siblings.
        //
        // if (clicked.closest('li').index() === 0) {
        //     console.log('First li clicked');
        // }

        // WORKS: Option B
        //
        // 1. Select the closest <li>,
        // 2. Select its parent <ul>,
        // 3. Select the parent's (<ul>) children (<li>), which is all <li>,
        // 4. Select the first <li> in the list,
        // 5. Returns an array-like Jquery Object.
        //
        // NOTE:
        // - The 'listOBJ[0]' and 'clicked.closest('li')[0]' is misleading, it infers
        //   that the list contains more than on element in the array-like JQuery object,
        //   where in fact only contains one element.
        // - The [0] can never be greater than 0.
        // - The brackets [0], almost act like dereferencing a pointer, returning
        //   the actual DOM value in this case, that is unwrapping the JQ object
        //   to reveal the actual DOM element.
        // - Therefore, wherein vanilla JS can be used to manipulate it.
        let listOBJ = clicked.closest('li').parent().children('li').first();
        if (clicked.closest('li')[0] === listOBJ[0]) {
            console.log('First li clicked');
            clicked.toggleClass('open');
            clicked.closest('li').siblings('li').toggle();
        }

        console.log($(this).closest('li').parent().children('li').index(clicked.closest('li')));

        // WORKS: Option C
        //
        // if (clicked.closest('li').is(':first-child')) {
        //     console.log('First li clicked');
        // }
    });
}

function toggleMobile_SubNavOnClick() {
    $("#top-nav a").off('.mobile').on('click.mobile', function () {
        if (window.innerWidth >= DESKTOP_BREAKPOINT) { return; }

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
    $('.subNav li').show();
    // $('.subNav a').off('.desktop').off('.mobile'); // Not sure if i need this.

    $("#top-nav a").show();
    navLinks.removeClass('active-overlay');
    navLinks.off('.desktop').off('.mobile');
}

// After refactoring, this does not work.
// - The desktop events did not trigger.
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