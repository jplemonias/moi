$(document).ready(function () {

    $("span").mouseover(function () {
        if ($(this).attr("title") == "")
            return false;

        $("body").append('<span class="infobulle"></span>');
        var bulle = $(".infobulle:last");
        bulle.append($(this).attr("title"));
        $(this).attr("title", "");
        var posTop = $(this).offset().top - $(this).height();
        var posLeft = $(this).offset().left + $(this).width() / 2 - bulle.width() / 2;
        bulle.css({
            left: posLeft,
            top: posTop + 5,
            opacity: 0
        });
        bulle.animate({
            top: posTop - 10,
            opacity: 0.99
        }, 500);
    })

    $("span").mouseout(function () {
        var bulle = $(".infobulle:last");
        $(this).attr("title", bulle.text());
        bulle.animate({
            top: bulle.offset().top - 10,
            opacity: 0
        }, 500, "linear", function () {
            bulle.remove();
        });
    });

});