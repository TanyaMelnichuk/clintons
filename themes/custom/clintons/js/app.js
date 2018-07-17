// anchor links
(function ($) {
$(document).ready(function () {
    $("nav .navbar-nav .nav-item").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1000);
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


    $('#carouselPeople').carousel({
        interval: 20000
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

})(jQuery);

(function ($) {

    $(".people-photo.default").mouseover(function(){
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

    $(".people-photo.hover span").click(function() {
        var popup = $(this).closest('.panel.panel-default').find('.popup');
        popup.css('display', 'none');
        var popupContent = popup.html();
        var element = $('#quicktabs-meet_the_team .ui-tabs-nav');
        element.after('<div class="popup popup-modal"></div>');
        var popupModal = $(".popup.popup-modal");
        popupModal.html(popupContent);

    });

    $(document).mouseup(function (e) {
        var container = $(".popup.popup-modal");
        if (container.has(e.target).length === 0){
            container.hide();
        }
    });
    $('.icon-close').click(function (){
        alert("kdfm");
    })
})(jQuery);