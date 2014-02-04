$(function($){

    $('.menu').on('touch click', function(event) {
        event.preventDefault();
        $('[id=main]').toggleClass('active');
    });

    var widthItem = $('#alerts').width();
    var widthDelete = (widthItem / 2) - ($('#alerts .delete').width()) + 5;

    $('#alerts .delete').css({
        'margin-left': widthDelete
    });

    $('#alerts').carouFredSel({
        items: {
            visible: 1,
            width: widthItem
        },
        auto: {
            play: false
        },
        direction: "left",
        swipe: {
            onTouch: true
        },
        pagination: {
            container: "#alerts-pagination",
            anchorBuilder: function () {
                return "<span></span>";
            }
        }
    });

});
