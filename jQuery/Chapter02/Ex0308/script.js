function scrollHandler() {

    // for문 사용
    var windowBottom = $(window).scrollTop() + $(window).height();
    var playlists = $('.playlist');
    for (var i = 0; i <playlists.length; i++) {
        var playlist = $(playlists[i]);
        var playlistHalf = playlist.position().top + playlist.outerHeight() / 2;

        if(playlistHalf < windowBottom) {
            playlist.animate({'opacity': '1'}, 1500);
        }
    }

    // each문 사용
    $('.playlist').each(function() {
        var playlist = $(this);
        var playlistHalf = playlist.position().top + playlist.outerHeight() / 2;

        if(playlistHalf < windowBottom) {
            playlist.animate({'opacity': '1'}, 1500);
        }

    })

}

$(window).on('scroll', scrollHandler)

scrollHandler();