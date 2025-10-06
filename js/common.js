$(function() {

    // 로그인 비밀번호 보이기 버튼 토글
    $('#hidePassword').click(function() {
        $(this).stop().toggleClass('active');
        if ($(this).hasClass('active')) {
            $(this).find('img').attr({
                'src': 'images/icons/view-disabled-icon.png',
                'alt': '비밀번호 가리기'
            });
            $(this).prev().attr('type', 'text');
        } else {
            $(this).find('img').attr({
                'src': 'images/icons/view-icon.png',
                'alt': '비밀번호 보기'
            });
            $(this).prev().attr('type', 'password');
        }
    });

    // 비밀번호 변경 저장 버튼 활성화
    $('#userPw, #userPwChk').keyup(function() {
        if ($('#userPw').val() && $('#userPwChk').val()) {
            $('#pwSaveBtn').attr('disabled', false);
        } else {
            $('#pwSaveBtn').attr('disabled', true);
        }
    });

    // 로그인 팝업, 비밀번호 변경 확인 버튼
    $('#loginPopCheck').click(function() {
        $(this).parents('.popup').removeClass('on');
    });

    // 팝업 닫기
    $('.popup__close').click(function() {
        $(this).parents('.popup').removeClass('on');
    });

    // 메인 체육활동, 교육참여 메뉴 토글
    $('.main__toggle-btn').click(function() {
        $(this).toggleClass('open');
        $(this).next().slideToggle();
    });

    // 메인 배너 슬라이드
    const $bannerItems = $('#bannerList li');
    const totalBanner = $bannerItems.length;
    let bannerPage = 0;

    $('#bannerNum em').text(totalBanner); // 배너 개수
    let slideShow = setInterval(bannerSlide, 5000); // 슬라이드 자동

    function bannerSlide() {
        $bannerItems.eq(bannerPage).stop().animate({'left': '-100%'});
        totalBanner - 1 > bannerPage ? bannerPage++ : bannerPage = 0;
        $bannerItems.eq(bannerPage).stop().css({'left': '100%'});
        $bannerItems.eq(bannerPage).stop().animate({'left': '0'});
        $('#bannerNum span').text(`${bannerPage+1}/`);
    }

    $('#bannerPlayBtn').click(function() {
        $(this).toggleClass('pause');
        if ($(this).hasClass('pause')) {
            clearInterval(slideShow);
        } else {
            slideShow = setInterval(bannerSlide, 5000);
        }
    });

    // 증명서발급 슬라이드
    const itemsPerPage = 6;
    const $slider = $('.clc-crt__list');
    const $items = $('.clc-crt__item');
    const $status = $('.clc-crt__btn');
    const totalItems = $items.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    let currentPage = 0;

    function updateSlider() {
        const offset = -100 * currentPage;
        $slider.css('transform', `translateX(${offset}%)`);
    }

    $('#crtNextBtn').click(function() {
        if (currentPage < totalPages - 1) {
            currentPage++;
            updateSlider();
            $status.removeClass('active');
            $status.eq(currentPage).addClass('active');
        }
    });

    $('#crtPrevBtn').click(function() {
        if (currentPage > 0) {
            currentPage--;
            updateSlider();
            $status.removeClass('active');
            $status.eq(currentPage).addClass('active');
        }
    });

    $status.click(function() {
        $status.removeClass('active');
        $(this).addClass('active');
        currentPage = $(this).index();
        updateSlider();
    });

    // 생애주기별 서비스
    const $hubTab = $('.hub-cyc__tabbtn');
    const $hubBlock = $('.hub-cyc__cntn');
    
    $hubTab.click(function() {
        $hubTab.removeClass('active');
        $hubBlock.removeClass('active');
        $(this).addClass('active');
        $hubBlock.eq($(this).index()).addClass('active');
    });

    // 탭버튼 공통
    $('.tab-btn').click(function() {
        $(this).parents('.tab').find('.tab-btn').removeClass('active');
        $(this).addClass('active');
    });

    $('.tab2__btn').click(function() {
        $(this).parents('.tab2').find('.tab2__btn').removeClass('active');
        $(this).addClass('active');
    });

    $('.hub-mdm__tabbtn').click(function() {
        $(this).parents('.hub-mdm__tab').find('.hub-mdm__tabbtn').removeClass('active');
        $(this).addClass('active');
    });

    // 스포츠정보 슬라이드
    const $sprItems = $('.spr__list');
    const totalSpr = $sprItems.length;
    let sprPage = 0;

    $('#sprNextBtn').click(function() {
        if (sprPage < totalSpr - 1) {
            $sprItems.eq(sprPage).stop().animate({'left': '-100%'});
            sprPage++;
            $sprItems.eq(sprPage).stop().css({'left': '110%'});
            $sprItems.eq(sprPage).stop().animate({'left': '3rem'});
            $('.spr__stts-btn').removeClass('active');
            $('.spr__stts-btn').eq(sprPage).addClass('active');
        }
        
    });

    $('#sprPrevBtn').click(function() {
        if (sprPage > 0) {
            $sprItems.eq(sprPage).stop().animate({'left': '110%'});
            sprPage--;
            $sprItems.eq(sprPage).stop().css({'left': '-100%'});
            $sprItems.eq(sprPage).stop().animate({'left': '3rem'});
            $('.spr__stts-btn').removeClass('active');
            $('.spr__stts-btn').eq(sprPage).addClass('active');
        }
    });

    $('.spr__stts-btn').click(function() {
        $sprItems.eq(sprPage).stop().animate({'left': '-100%'});
        sprPage = $(this).index();
        $sprItems.eq(sprPage).stop().css({'left': '110%'});
        $sprItems.eq(sprPage).stop().animate({'left': '3rem'});
        $('.spr__stts-btn').removeClass('active');
        $('.spr__stts-btn').eq(sprPage).addClass('active');
    });

    // 스포츠 통계 등록 현황
    const chrtItemsPerPage = 3;
    const $chrtSlider = $('.chrt__list');
    const $chrtItems = $('.chrt__item');
    const chrtTotalItems = $chrtItems.length;
    const chrtTotalPages = Math.ceil(chrtTotalItems / chrtItemsPerPage);
    let chrtPage = 0;

    function chrtSlider() {
        const offset = -100 * chrtPage;
        $chrtSlider.css('transform', `translateX(${offset}%)`);
    }

    $('#chrtNextBtn').click(function() {
        if (chrtPage < chrtTotalPages - 1) {
            chrtPage++;
            chrtSlider();
        }
    });

    $('#chrtPrevBtn').click(function() {
        if (chrtPage > 0) {
            chrtPage--;
            chrtSlider();
        }
    });

    // 증명서 발급안내 탭 
    $('.tab3__btn').click(function() {
        let elIndex = $(this).index();

        $('.tab3__btn').removeClass('active');
        $(this).addClass('active');
        $('article').removeClass('active');
        if (elIndex === 0) {
            $('.chc').addClass('active');
        } else {
            $('.prcd').addClass('active');
        }

        $(window).scrollTop(0);
    });

    $('.prcd__btn').click(function() {
        let dataNum = parseInt($(this).attr('data-number'));
        $('article').removeClass('active');
        $('.mns').addClass('active');
        $('.mns__tab button').removeClass('active');
        $('.mns__block').removeClass('active');
        $('.mns__tab button').eq(dataNum - 1).addClass('active');
        $('.mns__block').eq(dataNum - 1).addClass('active');

        $(window).scrollTop(0);
    });

    $('.mns__tab button').click(function() {
        let elIndex = $(this).index();

        $('.mns__tab button').removeClass('active');
        $(this).addClass('active');
        $('.mns__block').removeClass('active');
        $('.mns__block').eq(elIndex).addClass('active');

        $(window).scrollTop(0);
    });

    // 이미지형, 리스트형
    $('.chcList').click(function() {
        $('.chc__btn').removeClass('active');
        $('.chcList').addClass('active');
        $('.chc__list').removeClass('chc__list--img');
    });

    $('.chcImage').click(function() {
        $('.chc__btn').removeClass('active');
        $('.chcImage').addClass('active');
        $('.chc__list').addClass('chc__list--img');
    });

    // 종목선택 팝업 
    $('.chc__link').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        const offset = $(this).offset();
        const top = offset.top - 50;
        const left = offset.left + 90;
        const right = offset.left - $('.game__pop').outerWidth() + 50;
        const currentNum = $(this).parent().index() + 1;
        const x = currentNum % 6;
        const y = currentNum % 4;
        const text = $(this).find('span').text();

        $('.game__pop').addClass('on');
        $('.game__tit span b').text(text);

        if ($(this).parents('ul').hasClass('chc__list--img')) { // 이미지형 리스트일 경우
            if (x === 1 || x === 2 || x === 3) {
                $('.game__pop').css({
                    top: top,
                    left: left,
                });
            } else {
                $('.game__pop').css({
                    top: top,
                    left: right
                });
            }
        } else {
            if (y === 1 || y === 2) {
                $('.game__pop').css({
                    top: top,
                    left: left,
                });
            } else {
                $('.game__pop').css({
                    top: top,
                    left: right,
                });
            }
        }
    });

    $('#popToggleBtn').click(function(e) {
        e.stopPropagation();
        $(this).next().toggleClass('on');
    });

    $(document).click(function(e) {
        if (!$(e.target).closest('.game__pop, .chc__link, #popToggleBtn').length) {
            $('.game__pop').removeClass('on');
        }
    });

});

// datepicker
$.datepicker.setDefaults({
    dateFormat: "yy-mm-dd",
    dayNames: ["S", "M", "T", "W", "T", "F", "S"],
    dayNamesMin: ["S", "M", "T", "W", "T", "F", "S"],
    monthNames: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
    monthNamesShort: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
    prevText: "이전",
    nextText: "다음",
    currentText: "오늘",
    closeText: "닫기",
    changeMonth: true,
    changeYear: true,
    showOn: "both",
    buttonImage: 'images/icons/calendar-gray-icon.png',
    buttonImageOnly: true,
    beforeShow: function(input, inst) {
        setTimeout(() => {
            const date = $(input).datepicker("getDate") || new Date();
            updateCustomTitle(date.getFullYear(), date.getMonth() + 1);
        }, 0);
    },
    onChangeMonthYear: function(year, month, inst) {
        setTimeout(() => {
            updateCustomTitle(year, month);
        }, 0);
    }
});

function updateCustomTitle(year, month) {
    const monthNames = ['01','02','03','04','05','06','07','08','09','10','11','12'];
    const customText = `${year}. ${monthNames[month - 1]}`;
    $('.ui-datepicker-title .custom-title').remove(); // 중복 방지
    $('.ui-datepicker-title').prepend(`<div class="custom-title">${customText}</div>`);
}

$(function() {
    $('.datepicker').datepicker();
});

// selectbox 커스텀
$(document).ready(function () {
    $('.selectbox').each(function () {
        const $select = $(this);
        const options = $select.find('option');
        const selectedText = options.filter(':selected').text() || options.eq(0).text();
        const $wrapper = $('<div class="custom-select-wrapper"></div>');
        const $customSelect = $(`
            <div class="custom-select">
                <div class="custom-select-trigger">${selectedText}</div>
                <div class="custom-options"></div>
            </div>
        `);

        // 옵션 넣기
        options.each(function () {
            const value = $(this).val();
            const text = $(this).text();
            const $option = $(`<span class="custom-option" data-value="${value}">${text}</span>`);
            $customSelect.find('.custom-options').append($option);
        });

        // select 숨기고 커스텀 셀렉트 추가
        $select.hide().after($wrapper);
        $wrapper.append($customSelect);

        // 트리거 클릭 시 열기/닫기
        $customSelect.find('.custom-select-trigger').on('click', function () {
            $customSelect.toggleClass('open');
        });

        // 옵션 선택
        $customSelect.find('.custom-option').on('click', function () {
            const value = $(this).data('value');
            const text = $(this).text();

            $customSelect.find('.custom-select-trigger').text(text);
            $select.val(value).trigger('change');
            $customSelect.removeClass('open');
        });
    });

    // 외부 클릭 시 드롭다운 닫기
    $(document).on('click', function (e) {
        if (!$(e.target).closest('.custom-select').length) {
            $('.custom-select').removeClass('open');
        }
    });

});


$(function() {
    // 추가정보 입력 탭
    $('.adtn__tab button').click(function() {
        let currentIndex = $(this).index();
        console.log(currentIndex);
        $('.adtn__tab button').removeClass('active');
        $(this).addClass('active');
        $('.adtn__section').removeClass('active');
        $('.adtn__container .adtn__section').eq(currentIndex).addClass('active');
    });

    // 선수촌견학 사진갤러리 슬라이드
    const $galleryItems = $('.dtl__slide-list li');
    const totalgallery = $galleryItems.length;
    let galleryPage = 0;

    $('.dtl__total-cnt').text(totalgallery);

    $('#galleryNext').click(function() {
        if (galleryPage < totalgallery - 1) {
            $galleryItems.eq(galleryPage).stop().animate({'left': '-100%'});
            galleryPage++;
            $galleryItems.eq(galleryPage).stop().css({'left': '100%'});
            $galleryItems.eq(galleryPage).stop().animate({'left': '0'});
            $('.dtl__status').text(galleryPage+1);
        }
        
    });

    $('#galleryPrev').click(function() {
        if (galleryPage > 0) {
            $galleryItems.eq(galleryPage).stop().animate({'left': '100%'});
            galleryPage--;
            $galleryItems.eq(galleryPage).stop().css({'left': '-100%'});
            $galleryItems.eq(galleryPage).stop().animate({'left': '0'});
            $('.dtl__status').text(galleryPage+1);
        }
    });
});

// 전문체육팀 신청 종별/팀성별 체크박스
$(function() {
    // 연령대 체크박스 클릭 이벤트
    $('input[name="ageGroup"]').on('change', function () {
        const selected = $(this);
        const isChecked = selected.is(':checked');
        const selectedVal = selected.val(); // ex: "12under"

        // 모든 성별 체크박스를 비활성화하고 체크 해제
        $('input[name^="gender_"]').prop('disabled', true).prop('checked', false);

        if (isChecked) {
            // 다른 연령대는 체크 해제 및 비활성화
            $('input[name="ageGroup"]').not(selected).prop('checked', false).prop('disabled', true);

            // 해당 연령대에 연결된 성별 체크박스 활성화
            $(`input[name="gender_${selectedVal}"]`).prop('disabled', false);
        } else {
            // 선택 해제 시 모든 연령대 다시 활성화
            $('input[name="ageGroup"]').prop('disabled', false);

            // 모든 성별 체크박스 다시 비활성화
            $('input[name^="gender_"]').prop('disabled', true).prop('checked', false);
        }
    });
});

// 자주묻는 질문 토글
$(document).ready(function() {
    $('.qz__toggle').on('click', function(e) {
        e.preventDefault();

        const $toggle = $(this);
        const $block = $toggle.next('.qz__block');
        const $img = $toggle.find('img');

        // 다른 항목 닫기 (선택적)
        $('.qz__block').not($block).slideUp();
        $('.qz__toggle').not($toggle).removeClass('active').find('img').removeClass('rotate-180');

        // 현재 항목 토글
        $block.slideToggle();
        $toggle.toggleClass('active');
        $img.toggleClass('rotate-180');
    });
});

// 신청서작성 탭 
$(function() {
    $('.step__item').click(function() {
        const currentItem = $(this).index();

        $('.step__item').removeClass('active');
        $(this).addClass('active');

        $('.ply-bsc__item').hide();
        $('.ply-bsc__item').eq(currentItem).show();

        $('.pstn__list li').removeClass('active');
        $('.pstn__list li').eq(currentItem).addClass('active');

        $(window).scrollTop(0);
    });

    $('.nextStepButton, .prevStepButton').click(function() {
        const currentItem = $(this).parents('.ply-bsc__item').index();
        const currentCnt = $(this).hasClass('nextStepButton') ? currentItem + 1 : currentItem - 1;

        $('.step__item').removeClass('active');
        $('.step__item').eq(currentCnt).addClass('active');

        $('.ply-bsc__item').hide();
        $('.ply-bsc__item').eq(currentCnt).show();

        $('.pstn__list li').removeClass('active');
        $('.pstn__list li').eq(currentCnt).addClass('active');

        $(window).scrollTop(0);
        
    });

});

// breadcrumbs toggle
$(function() {
    $(document).click(function(e) {
        // 클릭한 요소가 brdc__link나 brdc__sub 내부가 아니라면
        if (!$(e.target).closest('.brdc__item').length) {
            $('.brdc__link').removeClass('active');
            $('.brdc__sub').slideUp();
        }
    });

    $('.brdc__link').click(function(e) {
        var $this = $(this);
        var $submenu = $this.next('.brdc__sub');

        if ($submenu.length > 0) {
            e.preventDefault(); // 링크 이동 방지

            if ($this.hasClass('active')) {
                $this.removeClass('active');
                $submenu.slideUp();
            } else {
                $('.brdc__link').removeClass('active');
                $('.brdc__sub').slideUp();
                $this.addClass('active');
                $submenu.slideDown();
            }
        }
        // brdc__sub 없으면 기본 링크 이동
        e.stopPropagation(); // 문서 클릭 이벤트 전파 방지
    });

    // 클릭 방지 (하위 메뉴 클릭 시에도 문서 클릭 이벤트 방지)
    $('.brdc__sub').click(function(e) {
        e.stopPropagation();
    });
});