var addInjQuery = true;
var checkReady = function (callback) {
    if (window.$) {
        callback($);
    }
    else {
        window.setTimeout(function () { checkReady(callback); }, 100);
    }
};

checkReady(function ($) {
    // Use $ here...
    $(document).ready(function () {
        if ($(".tabbar .tabbar-content .tabbar-page").length > 1) {
            $(".tabbar .tabbar-page:visible").addClass("paginationActive");
            $(".tabbar .tabbar-menu-page[href=#" + $(".tabbar-page:visible").attr("id") + "]").addClass("paginationActive");
            $(".tabbar .tabbar-page:last-child").insertBefore(".tabbar .tabbar-page:first-child");
            $(".tabbar .tabbar-menu-page").click(function (e) {
                //e.preventDefault();
                if (!$(this).hasClass("paginationActive")) {
                    $(".tabbar .tabbar-menu-page.paginationActive, .tabbar .tabbar-page.paginationActive").removeClass("paginationActive");
                    $(".tabbar .tabbar-page" + $(this).attr("href")).addClass("paginationActive");
                    $(this).addClass("paginationActive");
                }
            });

            $(".tabbar").addClass("js");
        }
    });
});