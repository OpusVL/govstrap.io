$(document).ready(function() {
    /* Toggleable components with dropdowns */
    $('.toggle').click(function() {
        var target = $(this).attr("rel"),
            chevron = $(this).find('span');

        target     = $('#' + target);
        if (target.length > 0) {
            if (target.is(':visible')) {
                chevron.html('<i class="glyphicon glyphicon-chevron-right"></i> ');
            }
            else {
                chevron.html('<i class="glyphicon glyphicon-chevron-down"></i> ');
            }
            target.toggle();
        }
    });

    $('.scroll-top').click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });
});
