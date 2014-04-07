(function() {
    'strict';
    var updateWindowSize = function () {
        var windowWidth = $(window).width();
        var windowHeight = $(window).height();
        $(".banner").css({width: windowWidth, height: windowHeight - 60});
    }
    updateWindowSize();

})();