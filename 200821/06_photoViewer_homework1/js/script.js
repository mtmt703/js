// jQueryのコード ------------------- //
$(function () {

    // メイン画像の変数を作る

    let largePhoto = $('.main-photo img');


    // クリックイベント
    $('.photo-list li').on('click',function(){
        
        // let getPhoto = $(this).find('img').attr('src');
        let getPhoto = $(this).find('img').attr('src');
            // 押した画像のパス

        console.log(getPhoto);

        // $('.main-photo img').attr('src',getPhoto);
        largePhoto.attr('src',getPhoto);


        // ここから宿題｜クリックしたところに白枠をつける
        // クリックしたらまず白枠をはずす
        $('.active').removeClass('active');

        // クリックした順番を取得する
        let photoNumber = $(this).index();
        console.log(photoNumber);

        // クリックしたところに白枠をつける
        $('.photo-list li').eq(photoNumber).addClass('active');
        //$(this).eq(photoNumber).addClass('active');　だと動かない。。。


    });



    


});
