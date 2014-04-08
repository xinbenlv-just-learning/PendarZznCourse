(function() {
    'strict';
    var $w = $(window);
    var updateWindowSize = function () {
        var windowWidth = $w.width();
        var windowHeight = $w.height();
        $(".banner").css({width: windowWidth, height: windowHeight - 60});
    }
    var positionNavBar = function () {
        var scrollTop = $w.scrollTop();
        if (scrollTop > $w.height() - 60) {
            $(".navbar-wrapper").addClass("navbar-fix-top");
        } else {
            $(".navbar-wrapper").removeClass("navbar-fix-top");
        }
    }
    updateWindowSize();
    $(window).scroll(positionNavBar);

})();