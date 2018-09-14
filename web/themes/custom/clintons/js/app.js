// anchor links
(function ($) {
    $(document).ready(function () {
        $("nav .navbar-nav .nav-item").on("click", "a", function (event) {
            event.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({
                scrollTop: top
            }, 2000);
        });
    });
})(jQuery);
(function ($) {
    $(document).ready(function () {
        $('.carousel-inner .carousel-item:first').addClass('active');
    });
})(jQuery);


// carousel
(function ($) {

    $('#carouselPeople').on('slide.bs.carousel', function (e) {


        var $e = $(e.relatedTarget);
        var idx = $e.index();
        var itemsPerSlide = 5;
        var totalItems = $('.carousel-item').length;

        if (idx >= totalItems-(itemsPerSlide-1)) {
            var it = itemsPerSlide - (totalItems - idx);
            for (var i=0; i<it; i++) {
                // append slides to end
                if (e.direction=="left") {
                    $('.carousel-item').eq(i).appendTo('.carousel-inner');
                }
                else {
                    $('.carousel-item').eq(0).appendTo('.carousel-inner');
                }
            }
        }
    });

    var currentSlide;
    var rand;
    $(document).ready(function() {
        currentSlide = Math.floor((Math.random() * $('.carousel-item').length));
        rand = currentSlide;
        $('#carouselPeople').carousel(currentSlide);
        $('#carouselPeople').fadeIn(1000);
        setInterval(function(){
            while(rand == currentSlide){
                rand = Math.floor((Math.random() * $('.carousel-item').length));
            }
            currentSlide = rand;
            $('#carouselPeople').carousel(rand);
        }, 1000000);
    });

    $('#carouselPeople').carousel({
        interval: 2000
    });

})(jQuery);

(function ($) {
    $(document).ready(function () {
        /* show lightbox when clicking a thumbnail */
        $('a.thumb').click(function (event) {
            event.preventDefault();
            var content = $('.modal-body');
            content.empty();
            var title = $(this).attr("title");
            $('.modal-title').html(title);
            content.html($(this).html());
            $(".modal-profile").modal({
                show: true
            });
        });

    });

    $(function () {
        $("#quicktabs-meet_the_team").tabs({
            collapsible: true,
            active: false,
            show: {
                effect: "slideDown",
                duration: "slow"
            },
            hide: {
                effect: "slideUp",
                duration: "slow"
            }
        });

    });

})(jQuery);

(function ($) {

    $(".paragraph--type--people .people-photo.default").mouseover(function(){
        var photo = $(this);
        var parent = photo.parent(".panel-thumbnail");
        var check = parent.find(".people-photo.hover");
        photo.css('display', 'none');
        check.css('display', 'block');
    });
    $(".people-photo.hover").mouseout(function(){
        var photo = $(this);
        var parent = photo.parent(".panel-thumbnail");
        var check = parent.find(".people-photo.default");
        photo.css('display', 'none');
        check.css('display', 'block');
    });

    $(".people-photo.hover").click(function() {
        var popup = $(this).closest('.panel.panel-default').find('.popup');
        popup.css('display', 'none');
        var popupContent = popup.html();
        var element = $('#quicktabs-meet_the_team .ui-tabs-nav');
        element.after('<div class="popup popup-modal"></div>');
        var popupModal = $(".popup.popup-modal");
        popupModal.html(popupContent);
        $(".popup-modal .icon-close").click(function(){
            $(".popup-modal").css('display', 'none');
        });

    });

    $(".item-description .panel-thumbnail").click(function() {
        var popup = $(this).closest('.panel.panel-default').find('.popup');
        popup.css('display', 'none');
        var popupContent = popup.html();
        var element = $('#block-views-block-services-services .back-blue');
        element.append('<div class="popup popup-modal"></div>');
        var popupModal = $(".popup.popup-modal");
        popupModal.html(popupContent);
        $(".popup-modal .icon-close").click(function(){
            $(".popup-modal").css('display', 'none');
        });

    });

    $(document).mouseup(function (e) {
        var container = $(".popup.popup-modal");
        if (container.has(e.target).length === 0){
            container.hide();
        }
    });

    $(".people-photo.hover a").click(function(){
        return false;
    });
    $('.email-contacts a').click(function(){
        return false;
    });
    $(".column-one .list-block:odd").css('display', 'none');
    $(".column-two .list-block:even").css('display', 'none');



    $(document).ready(function(){

        var items = $(".list-text h1");
        var delay = 2000;
        var id = 0;

        var text = $(".text-animation .text");


        $('div.text h1').text($(items[id]).text());

        function cycle()
        {
            text.animate({
                'width': "20px",
            }, 2000 );

            text.queue(function () {
                changeText();
                $(this).dequeue();
            });
            text.animate({
                'width': "98%",
            }, 2000 );

        }

        function changeText( ) {
            ++id;

            if(typeof items[id] == typeof undefined){
                id = 0;
            }

            $('div.text h1').text($(items[id]).text());

            var colors = {0:"#f7c457",1:"#d85989",2:"#7600de"};
            setInterval(function() {
                //var bodybgarrayno = colors[id];//Math.floor(Math.random() * colors.length);
                //var selectedcolor = colors[bodybgarrayno];
                $("div.text h1").css("color",colors[id]);
            }, 4100);

        }


        setInterval(cycle, delay);
    });



    function parallax(){
        var scrolled = $(window).scrollTop();
        $('.border-left').css('top', +(scrolled * 0.3) + 'px');
        $('.border-right').css('bottom', -(scrolled * 0.3) + 'px');
    }
    $(window).scroll(function(e){
        parallax();
    });

    $(function () {

        var active = true;



        $('.list-block').on('show.bs.collapse', function () {
            if (active) $('#accordion .in').collapse('hide');
        });

    });
})(jQuery);