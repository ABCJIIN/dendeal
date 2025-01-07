$(function() {
    // selectbox custom
    function selectCustom(){
        $(document).on('click', '.select-item', function(e){
            e.preventDefault();
            if ($(this).hasClass('on')) {
                $(this).removeClass('on');
                $(this).siblings('.option-list').slideUp();
            } else {
                $('.select-item').removeClass('on').next('.option-list').slideUp();
                $(this).addClass('on');
                $(this).siblings('.option-list').slideDown();
            }
        });
        $(document).on('click', '.option-list li', function(e){
            e.preventDefault();
            const value = $(this).text();
        
            if (!$(this).hasClass('on')) {
                $(this).siblings('li').removeClass('on');
                $(this).addClass('on');
            }
            $(this).parents('.option-list').siblings('.select-item').html(value);
            $(this).parents('.option-list').slideUp().siblings('.select-item').removeClass('on');
            $(this).parents('.option-list').siblings('.direct-input').removeClass('on');
        });
    }selectCustom();

    // daterangepicker
    $('.daterange').daterangepicker({
        opens: 'left',
        showDropdowns: true,
        showSelectionPreview: false,
        locale: {
            separator: " ~ ",
            format: 'YYYY-MM-DD',
            cancelLabel: '취소',
            applyLabel: '확인',
            daysOfWeek: ['일', '월', '화', '수', '목', '금', '토'],
            monthNames: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
        },
        minYear: 1995,
        maxYear: 2030,
    });
    $('.daterange').on('show.daterangepicker', function (ev, picker) {
        // Today 버튼 추가
        const todayButton = `<button type="button" class="btn btn-sm btn-primary today-btn">Today</button>`;
        if (!picker.container.find('.today-btn').length) {
            picker.container.find('.drp-buttons').prepend(todayButton);
        }

        // Today 버튼 클릭 이벤트
        picker.container.find('.today-btn').off('click').on('click', function () {
            picker.setStartDate(moment());
            picker.setEndDate(moment());
            picker.updateView();
            picker.clickApply(); // 확인 버튼 동작 실행
        });

        // 취소 버튼 제거
        picker.container.find('.cancelBtn').remove();
    });

    // Tab Menu
    $('.tab-menu').each(function() {
        let $tabMenu = $(this); // 현재 탭 메뉴 그룹
        
        $tabMenu.find('.tab-list > li').on('click', function() {
            let tabIndex = $tabMenu.find('.tab-list > li').index(this); // 클릭된 탭의 인덱스

            // 현재 탭 메뉴 그룹의 탭과 콘텐츠 클래스 관리
            $tabMenu.find('.tab-list > li, .tab-cont > div').removeClass('on');
            $(this).addClass('on');
            $tabMenu.find('.tab-cont > div').eq(tabIndex).addClass('on');
        });
    });
    
});