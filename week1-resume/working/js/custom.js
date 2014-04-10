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
            $(".navbar-placeholder").css({display:"block"});
        } else {
            $(".navbar-wrapper").removeClass("navbar-fix-top");
            $(".navbar-placeholder").css({display:"none"});
        }
    }
    var createCharts = function() {
        $(window).load(function(){
            var chart = window.chart = $('.chart').data('easyPieChart');
            $('.js_update').on('click', function() {
                chart.update(Math.random()*100);
            });
        });
        var chart = window.chart = $('.chart').data('easyPieChart');
        $('.js_update').on('click', function() {
            chart.update(Math.random()*200-100);
        });
        var index=0;
        $(document).scroll(function(){
            var top = $('.skills').height()-$(window).scrollTop();
            console.log(top)
            if(top<-300){
                if(index==0){

                    $('.chart').easyPieChart({
                        easing: 'easeOutBounce',
                        onStep: function(from, to, percent) {
                            $(this.el).find('.percent').text(Math.round(percent));
                        }
                    });

                }
                index++;
            }
        })
    }
    var createFilter = function() {

    }
    updateWindowSize();
    createCharts();
    createFilter();
    $(window).scroll(positionNavBar);

})();