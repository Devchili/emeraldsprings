$(document).ready(function() {
    //Toggle mobile navigation
    $('.mb_menu').click(function() {
        $('.nav_menu').toggleClass('active');
    });

    // Adjust icon size based on window width
    function adjustIconSize() {
        if ($(window).width() < 768) {
            $('.icon_bg > i').removeClass('fa-xl').addClass('fa-lg');
        } else {
            $('.icon_bg > i').removeClass('fa-lg').addClass('fa-xl');
        }
    }

    // Initial adjustment
    adjustIconSize();

    // Adjust on window resize
    $(window).resize(adjustIconSize);

    // Scroll buttons
    $('#slide_right').click(function(event) {
        event.preventDefault();
        $('#gallery').animate({
            scrollLeft: "+=295px"
        }, "slow");
    });

    $('#slide_left').click(function(event) {
        event.preventDefault();
        $('#gallery').animate({
            scrollLeft: "-=295px"
        }, "slow");
    });

    // Set rooms as default display in gallery
    $('.gallery_item').not('.rooms').hide(5000);
    $('.gallery_item.rooms').show(5000);

    // Filter gallery
    $('.select_btn').click(function() {
        const value = $(this).attr('data-filter');
        $('.gallery_item').not('.' + value).fadeOut(1000);
        $('.gallery_item.' + value).fadeIn(1000, function() {
            $('#gallery').scrollLeft(0);
        });

        // Add active class to select buttons
        $(this).addClass('active').siblings().removeClass('active');
        $(this).children('.bar').addClass('active_bar');
        $(this).siblings().children('.bar').removeClass('active_bar');
    });
});
