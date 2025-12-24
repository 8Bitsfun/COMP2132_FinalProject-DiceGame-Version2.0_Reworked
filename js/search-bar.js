// References:
// 1. https://www.w3schools.com/jquery/event_focus.asp


// Does not work properly.
//
// let search_input = $('.search-bar input');
// let searchBar = $('.search-bar');
// search_input.focus(function () {
//     $('.trending-searches').css('display', 'flex');
// })
//
// let _trendingSearches = $('.trending-searches');
//
// search_input.blur(function () {
//     _trendingSearches.css('display', 'none');
// })

// Vanilla JS DOM equivalent:
//
// const _search_input = document.querySelector('.search-bar input');
// const _trendingSearches = document.querySelector('.trending-searches');
// _search_input.addEventListener('focus', function(e) {
//     _trendingSearches.style.display = 'flex';
// });
//
// _search_input.addEventListener('blur', function(e) {
//     _trendingSearches.style.display = 'none';
// });

// Still does not work as expected.
// - Any time I click anywhere except the anchors the .trending-searches closes.
// - Not what I need.
//
// let _searchContainer = $('.search-container');
// let _searchBar = $('.search-bar');
// let _trendingSearches = $('.trending-searches');
//
// _searchBar.on('focusin', function () {
//     _trendingSearches.css('display', 'flex');
// });
//
// _searchBar.on('focusout', function () {
//     _trendingSearches.css('display', 'none');
// });

// Yet again, still does not quite work as expected.
//
// $(function () {
//     const $searchBar = $('.search-bar');
//     const $input     = $('.search-bar input');
//     const $trending  = $('.trending-searches');
//
//     function openTrending() {
//         $trending.css('display', 'flex');
//     }
//
//     function closeTrending() {
//         $trending.css('display', 'none');
//     }
//
//     /* 1️⃣ Open when input receives focus */
//     $input.on('focusin', function () {  // Does not work almost.
//         openTrending();
//     });
//
//     /* 2️⃣ Clicking inside search-bar keeps it open */
//     $searchBar.on('mousedown', function (e) {
//         e.stopPropagation();
//     });
//
//     /* 3️⃣ Clicking a link closes overlay */
//     $trending.on('click', 'a', function () {
//         closeTrending();
//     });
//
//     /* 4️⃣ Clicking anywhere else closes overlay */
//     $(document).on('mousedown', function () {
//         closeTrending();
//     });
//
//     /* 5️⃣ Leaving search-bar closes overlay */
//     $searchBar.on('mouseleave', function () {
//         closeTrending();
//     });
// });


// WORKS!!!
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