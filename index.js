var currentPage = 1;
var currentScrollImagePage = 1;

///默认选择的按钮
$('.englishBtn').css('color', 'rgb(34, 126, 36)');
// onNavListSelet(1);
// onBrandBottomImageSelect(1);
onBrandTopListSelect(1);
onBrandTopImageSelect(1);

/**
 * home_right： 界面缩小后导航栏上的菜单栏按钮
 */
// 界面缩小后点击谈框式菜单显示
$('.home_right').on('click', function() {
    $('.min_list_bg').show();
});

$('.min_list_bg').on('click', function() {
    $('.min_list_bg').hide();
});

$('.homeBtn').on('click', function() {
    onNavListSelet(1);
    $('.brand_class').hide();
    $('.home_class').show();
    $('.min_list_bg').hide();
    window.history.back(-1);
});

$('.brandBtn').on('click', function() {
    onNavListSelet(2);
    $('.home_class').hide();
    $('.brand_class').show();
    $('.min_list_bg').hide();
    window.location.href="brand.html";
});

$('.newsBtn').on('click', function() {
    $('.min_list_bg').hide();
});

$('.aboutBtn').on('click', function() {
    $('.min_list_bg').hide();
});

/**
 * all_brand_class ：   ALL BRAND模块
 * double_phoenix_class ： DOUBLE PHOENIX 模块
 */

/// 2级导航栏
$('.allBtn').on('click', function() {
    onBrandTopListSelect(1);
    $('.double_phoenix_class').hide();
    $('.all_brand_class').show();
});

$('.doubleBtn').on('click', function() {
    onBrandTopListSelect(2);
    $('.all_brand_class').hide();
    $('.double_phoenix_class').show();
});

$('.patraBtn').on('click', function() {
    onBrandTopListSelect(3);
    $('.all_brand_class').hide();
    $('.double_phoenix_class').show();
});

$('.emeBtn').on('click', function() {
    onBrandTopListSelect(4);
    $('.all_brand_class').hide();
    $('.double_phoenix_class').show();
});

$('.konnersBtn').on('click', function() {
    onBrandTopListSelect(5);
    $('.all_brand_class').hide();
    $('.double_phoenix_class').show();
});

$('.plakBtn').on('click', function() {
    onBrandTopListSelect(6);
    $('.all_brand_class').hide();
    $('.double_phoenix_class').show();
});


// 网页顶部More按钮
$('.mosaicBtn').on('click', function() {
    document.getElementById('tanchuang_title').innerHTML = 'Twinle Mosaic';
    onTanchuangImageSelect(1);
    $('.tanchuang_video_view').show();
    currentPage = 1;
    $('.scroll_tanchuang').show();
    
})

$('.dragonBtn').on('click', function() {
    currentPage = 1;
    $('.tanchuang_video_view').hide();
    document.getElementById('tanchuang_title').innerHTML = 'Novel Dragon';
    onTanchuangImageSelect(1);
    $('.scroll_tanchuang').show();
})


// all brand 
$('.all_brand_image_1').on('click', function() {
    onBrandTopImageSelect(1);
})

$('.all_brand_image_2').on('click', function() {
    onBrandTopImageSelect(2);
})

$('.all_brand_image_3').on('click', function() {
    onBrandTopImageSelect(3);
})

$('.all_brand_image_4').on('click', function() {
    onBrandTopImageSelect(4);
})

$('.all_brand_image_5').on('click', function() {
    onBrandTopImageSelect(5);
})

$('.all_brand_bottom_image_1').on('click', function() {
    onBrandBottomImageSelect(1);
})

$('.all_brand_bottom_image_2').on('click', function() {
    onBrandBottomImageSelect(2);
})

$('.all_brand_bottom_image_3').on('click', function() {
    onBrandBottomImageSelect(3);
})

$('.all_brand_bottom_image_4').on('click', function() {
    onBrandBottomImageSelect(4);
})

$('.all_brand_bottom_image_5').on('click', function() {
    onBrandBottomImageSelect(5);
})

// Double Phoenix 图片列表
$('.image_line_1').on('click', function() {
    $('.scroll_tanchuang_image').show();
})

/**
 * scroll_tanchuang_image： 轮播图类型弹窗
 * scroll_tanchuang：带有视频类的弹窗， 如果不需要视频将class: tanchuang_video_view隐藏便可
 */
// =========== 图片列表弹窗 ===========
$('.scroll_tanchuang_image').on('click', function() {
    $('.scroll_tanchuang_image').hide();
})

$('.scroll_closeBtn').on('click', function() {
    $('.scroll_tanchuang_image').hide();
})

$('.tanchuang_scroll_image_pre').on('click', function() {
    if (currentScrollImagePage != 1) {
        currentScrollImagePage--;
    }else {
        currentScrollImagePage = 5;
    }
    document.getElementById('scroll_image_current').innerHTML = `${currentScrollImagePage} / 5`;
})

$('.tanchuang_scroll_image_next').on('click', function() {
    if (currentScrollImagePage != 5) {
        currentScrollImagePage++;
    }else {
        currentScrollImagePage = 1;
    }
    document.getElementById('scroll_image_current').innerHTML = `${currentScrollImagePage} / 5`;
})

// =========== 弹窗 ===========
$('.scroll_tanchuang').on('click', function() {
    currentScrollImagePage = 1;
    $('.scroll_tanchuang').hide();
})

$('.close_btn').on('click', function() {
    currentScrollImagePage = 1;
    $('.scroll_tanchuang').hide();
})


// 点击大图
$('.tanchuang_max_image').on('click', function() {
    currentScrollImagePage = 1;
    $('.scroll_tanchuang_image').show();
})



// 不做响应事件
$('.tanchuang_bg').on('click', function(e) {
    e.stopPropagation();
})

$('.scroll_bg').on('click', function(e) {
    e.stopPropagation();
})

$('.min_input').on('click', function(e) {
    e.stopPropagation();
})

$('.min_eng').on('click', function(e) {
    e.stopPropagation();
})


// 上一张
$('.tanchuang_image_pre').on('click', function(e) {
    if (currentPage != 1) {
        currentPage--;
        onTanchuangImageSelect(currentPage);
    }
})

// 下一张
$('.tanchuang_image_next').on('click', function(e) {
    if (currentPage != 4) {
        currentPage++;
        onTanchuangImageSelect(currentPage);
    }
})

// 下面小图
$('.tanchuang_image_1').on('click', function(e) {
    currentPage = 1;
    onTanchuangImageSelect(1);
})

$('.tanchuang_image_2').on('click', function(e) {
    currentPage = 2;
    onTanchuangImageSelect(2);
})

$('.tanchuang_image_3').on('click', function(e) {
    currentPage = 3;
    onTanchuangImageSelect(3);
})

$('.tanchuang_image_4').on('click', function(e) {
    currentPage = 4;
    onTanchuangImageSelect(4);
})


function onNavListSelet(index) {
    $('.homeBtn').css('color', index == 1 ? 'rgb(34, 126, 36)' : 'rgb(0, 0, 0)');
    $('.brandBtn').css('color', index == 2 ? 'rgb(34, 126, 36)' : 'rgb(0, 0, 0)');
    $('.newsBtn').css('color', index == 3 ? 'rgb(34, 126, 36)' : 'rgb(0, 0, 0)');
    $('.aboutBtn').css('color', index == 4 ? 'rgb(34, 126, 36)' : 'rgb(0, 0, 0)');
}

function onBrandTopListSelect(index) {
    $('.allBtn').css('color', index == 1 ? 'rgb(34, 126, 36)' : 'rgb(0, 0, 0)');
    $('.doubleBtn').css('color', index == 2 ? 'rgb(34, 126, 36)' : 'rgb(0, 0, 0)');
    $('.patraBtn').css('color', index == 3 ? 'rgb(34, 126, 36)' : 'rgb(0, 0, 0)');
    $('.emeBtn').css('color', index == 4 ? 'rgb(34, 126, 36)' : 'rgb(0, 0, 0)');
    $('.konnersBtn').css('color', index == 5 ? 'rgb(34, 126, 36)' : 'rgb(0, 0, 0)');
    $('.plakBtn').css('color', index == 6 ? 'rgb(34, 126, 36)' : 'rgb(0, 0, 0)');
}

function onBrandTopImageSelect(index) {
    // $('.all_brand_image_1').css('border', index == 1 ?'2px solid red' : '');
    // $('.all_brand_image_2').css('border', index == 2 ?'2px solid red' : '');
    // $('.all_brand_image_3').css('border', index == 3 ?'2px solid red' : '');
    // $('.all_brand_image_4').css('border', index == 4 ?'2px solid red' : '');
    // $('.all_brand_image_5').css('border', index == 5 ?'2px solid red' : '');
    $('.all_brand_class_bg_image_view').css('background', `url(images/${index}.jpg) no-repeat center center / 100% auto`);
}

function onBrandBottomImageSelect(index) {
    // $('.all_brand_bottom_image_1').css('border', index == 1 ?'2px solid red' : '');
    // $('.all_brand_bottom_image_2').css('border', index == 2 ?'2px solid red' : '');
    // $('.all_brand_bottom_image_3').css('border', index == 3 ?'2px solid red' : '');
    // $('.all_brand_bottom_image_4').css('border', index == 4 ?'2px solid red' : '');
    // $('.all_brand_bottom_image_5').css('border', index == 5 ?'2px solid red' : '');
    $('.all_brand_class_bg_bottom_image_view').css('background', `url(images/${index}.jpg) no-repeat center center / 100% auto`);
    
}

function onTanchuangImageSelect(index) {
    // $('.tanchuang_image_1').css('border', index == 1 ?'2px solid red' : '');
    // $('.tanchuang_image_2').css('border', index == 2 ?'2px solid red' : '');
    // $('.tanchuang_image_3').css('border', index == 3 ?'2px solid red' : '');
    // $('.tanchuang_image_4').css('border', index == 4 ?'2px solid red' : '');
    // $('.all_brand_image_5').css('border', index == 5 ?'2px solid red' : '');
    $('.tanchuang_max_image').css('background', `url(images/${index}.jpg) no-repeat center center / 100% auto`);
}