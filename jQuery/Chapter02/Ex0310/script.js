function scrollHandler() {

    var windowBottom = $(window).scrollTop() + $(window).height();

    // each문 사용
    $('.playlist').each(function() {
        var playlist = $(this);
        var playlistHalf = playlist.position().top + playlist.outerHeight() / 2;

        if(playlistHalf < windowBottom) {
            playlist.animate({'opacity': '1'}, 1500);
        }

    });

    if (windowBottom == $(document).height()) {
        $('.to-top-btn').fadeIn();
    } else {
        $('.to-top-btn').fadeOut();
    }

}

$(window).on('scroll', scrollHandler)

scrollHandler();

$('.to-top-btn').on('click', function() {
    $('html, body').animate({scrolltop: 0}, 1000);
});

