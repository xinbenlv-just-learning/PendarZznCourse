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

        $("ul.nav.navbar-nav li a").each(function() {
            var section = $(this).attr("href");
            if ($(section).offset().top <= scrollTop + 60 &&
                scrollTop + 60 <= $(section).height() + $(section).offset().top) {
                $(this).parent().addClass("active");
            } else {
                $(this).parent().removeClass("active");
            }
        })
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

    updateWindowSize();
    createCharts();
    $(window).scroll(positionNavBar);


    // Somth page scroll
    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top -60
                    }, 1000);
                    return false;
                }
            }
        });
    });
})();