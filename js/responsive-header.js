const MIN_DESKTOP_WIDTH = 1107;

// UPDATE 1:
// - Quick test to inspect what happens when pages changes width.
//
// function checkWindowSize() {
//     if (window.innerWidth < MIN_DESKTOP_WIDTH) {
//         console.log("Mobile");
//
//     } else {
//         console.log("Desktop");
//     }
// }
//
// checkWindowSize(); // Runs once when the page loads.
// window.addEventListener("resize", checkWindowSize); // Event runs when each time the page width changes.

// UPDATE 2:
// - When the #top-nav is clicked, that is any of the anchors associated with the #top-nav is clicked,
//   it should toggle the .subNavs.
//
// $("#top-nav a").on("click", function() {
//     // - This does show the .subNavs, but showing all .subNavs not just the one tied to the currently
//     //   clicked top-nav link.
//     $(".subNav").css("display", "flex");
// });

// UPDATE 3:;
// - Continued from UPDATE 2, I have added logic to correctly select the .subNav that is associated
//   with the corresponding #top-nav link.
// PROBLEM:
// - The only issue with the code so far is that when I click on other top-nav links, each
//   click will ADD to the existing.subNav list...NOT the intended result.
//
// $("#top-nav a").on("click", function() {
//     let clicked = $(this);
//     let index = clicked.data("index");
//     console.log(index);
//     let subNav = $(".subNav");
//
//     $(subNav[index]).css("display", "flex");
// });

// UPDATE 3:
// - Fixed the issue previously stated in UPDATE 2.
// PROBLEM:
// - The next issue I am facing is to toggle the .subNav if I click the same top-nav. It remains visible.
//
// $("#top-nav a").on("click", function() {
//     let clicked = $(this);
//     // - The data-index in the html file is to keep track of the position of each top-nav link.
//     // - The index corresponds to each of the .subNavs which will be used to toggle its visibility.
//     let index = clicked.data("index");
//     console.log(index);
//     let subNav = $(".subNav");
//
//     subNav.css("display", "none");
//     $(subNav[index]).css("display", "flex");
// });

// UPDATE 4:
// - Fixed the issue stated previously with a toggle effect.
// PROBLEM:
// - A new problem occurs when I click on the first top-nav anchor on the list followed
//   immediately with a click on the second or any other anchor other than the first,
//   and back again to clicking on the first, the toggle works
// - The issue is with the second subNav still visible.
//
// $("#top-nav a").on("click", function() {
//     let clicked = $(this);
//     let index = clicked.data("index");
//     // console.log(index);
//     let subNav = $(".subNav");
//
//     $(subNav[index]).toggle();
// });

// UPDATE 5:
// - Fixed the issue previously stated in UPDATE 4.
// - Got the toggles and visibilities working as expected for both top-nav and subNav elements.
// - added the .off event to prevent multiple event handlers from stacking.
// NEXT:
// - Work on separating mobile and desktop logic.
//
// $("#top-nav a").off("click").on("click", function() {
//     let clicked = $(this);
//
//     $("#top-nav a").removeClass("active-navLink"); // Resets and removes all .active-navLinks
//     clicked.addClass("active-navLink");
//
//     let index = clicked.data("index"); // Assign index of the clicked anchor.
//     let subNav = $(".subNav");
//
//     subNav.removeClass("active-subNav"); // Resets and removes all .active-subNavs
//     $(subNav[index]).addClass("active-subNav"); // Use index from above to target subNav div.
//
//     // I needed a way to target all other subNavs that are not active to be hidden.
//     //
//     // References:
//     // 1. https://foobartel.com/articles/targeting-selectors-without-a-class-attribute
//     // 2. https://www.geeksforgeeks.org/jquery/how-to-select-all-elements-without-a-given-class-using-jquery/
//     $(".subNav:not(.active-subNav)").hide();
//     $(subNav[index]).toggle();
// });

// UPDATE 6:
//
function bindToMobile() {
    $("#top-nav a").off("click").on("click", function() {
        if (window.innerWidth >= MIN_DESKTOP_WIDTH) return;

        let clicked = $(this);

        $("#top-nav a").removeClass("active-navLink"); // Resets and removes all .active-navLinks
        clicked.addClass("active-navLink");

        let index = clicked.data("index"); // Assign index of the clicked anchor.
        let subNav = $(".subNav");

        subNav.removeClass("active-subNav"); // Resets and removes all .active-subNavs
        $(subNav[index]).addClass("active-subNav"); // Use index from above to target subNav div.

        // I needed a way to target all other subNavs that are not active to be hidden.
        //
        // References:
        // 1. https://foobartel.com/articles/targeting-selectors-without-a-class-attribute
        // 2. https://www.geeksforgeeks.org/jquery/how-to-select-all-elements-without-a-given-class-using-jquery/
        $(".subNav:not(.active-subNav)").hide();
        $(subNav[index]).toggle();
    });
}

function checkWindowSize() {
    if (window.innerWidth < MIN_DESKTOP_WIDTH) {
        // console.log("Mobile");
        bindToMobile();
    } else {
        // console.log("Desktop");
        $("#top-nav a").removeClass("active-navLink");
        $(".subNav").removeClass("active-subNav").hide();
    }
}

checkWindowSize(); // Runs once when the page loads.
window.addEventListener("resize", checkWindowSize);