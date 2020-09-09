$(document).ready(function() {
    var isShowBackMoveIcon = false;
    $(window).scroll(function() {
        // 현재 스크롤 위치
        var scrollTop = $(window).scrollTop();
        var newPosition = (scrollTop - 260) + 'px';

        if (scrollTop > 500) {
            if (!isShowBackMoveIcon) {
                $('#art-sub-icon-back-move').show();
                isShowBackMoveIcon = true;
            }
        } else {
            if (isShowBackMoveIcon) {
                $('#art-sub-icon-back-move').hide();
                isShowBackMoveIcon = false;
            }

        }

        // 애니메이션 X
        //$("#art-sub-icon-back-move").css('top', newPosition);
        // 애니메이션 O
        $("#art-sub-icon-back-move").stop().animate({ 'top': newPosition }, 400);

    }).scroll();
});