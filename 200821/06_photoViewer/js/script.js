// jQueryのコード ------------------- //
$(function () {

    // let imgArray =[];

    // $('.photo-list li').each(function(i,e){
    //     console.log(i, e);

    // });


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

    });



    


});
