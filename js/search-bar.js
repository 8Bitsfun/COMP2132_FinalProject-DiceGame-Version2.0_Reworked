
$(function () {
    const $searchBar = $('.search-bar');
    const $input     = $('.search-bar input');
    const $trending  = $('.trending-searches');

    function openTrending() {
        $trending.css('display', 'flex');
    }

    function closeTrending() {
        $trending.css('display', 'none');
    }

    /* 1️⃣ Open when input receives focus */
    $input.on('focusin click', function () { // Added a click event.
        openTrending();
    });

    /* 2️⃣ Clicking inside search-bar keeps it open */
    $searchBar.on('mousedown', function (e) {
        e.stopPropagation();
    });

    /* 3️⃣ Clicking a link closes overlay */
    $trending.on('click', 'a', function () {
        closeTrending();
    });

    /* 4️⃣ Clicking anywhere else closes overlay */
    $(document).on('mousedown', function () {
        closeTrending();
    });

    /* 5️⃣ Leaving search-bar closes overlay */
    $searchBar.on('mouseleave', function () {
        closeTrending();
    });
});