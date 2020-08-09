// jQueryのコード ------------------- //
$(function () {
    $('.tab-menu li').on('click',function(){
        $('.active').removeClass('active');

        // thisは、.tab-menu li？　この項目の設定の意味は？
        $(this).addClass('active');

        $('.tab-content li').removeClass('active');

        // クリックしたタブからインデックス番号を取得　ここのthisも、.tab-menu li？
        const index = $(this).index();
        // クリックしたタブと同じインデックス番号をもつコンテンツを表示
        $('.tab-content li').eq(index).addClass('active');
        
    });

});

// https://blog-and-destroy.com/7389
// ふわっと切り替えるには？
