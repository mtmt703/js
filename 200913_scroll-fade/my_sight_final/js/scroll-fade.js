
// スクロールしたらコンテンツ部分をふわっと出す
$(window).on('scroll',function(){
    // eachメソッドでscroll-effectクラス全ての要素を見にいく
    $('.scroll-effect').each(function(){

        // 要素の高さを取得
        let targetPos = $(this).offset().top;
        // console.log(targetPos);

        // スクロールの値を取得
        let scroll = $(window).scrollTop();

        // ブラウザの高さを取得
        let windowHeight = $(window).height();
        // console.log(windowHeight);


        // ターゲットが歌詞範囲に入ったら、.scroll-inを付与
        if(scroll > targetPos - windowHeight){
            $(this).addClass('scroll-in');
            // console.log(this);
        }
    });

    // headerを固定する
    $('#global-nav').each(function(){

        // 要素の高さを取得
        let targetPos = $(this).offset().top;

        // スクロールの値を取得
        let scroll = $(window).scrollTop();

        // ブラウザの高さを取得
        let windowHeight = $(window).height();


        // ターゲットが歌詞範囲に入ったら、.scroll-inを付与
        if(scroll > targetPos - windowHeight){
            $(this).addClass('is-fixed');
        }
    });





});