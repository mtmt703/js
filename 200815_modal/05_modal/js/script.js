// jQueryのコード ------------------- //
$(function () {

    $('.photo-list li').on('click',function(){

        // const indexNumber = $(this).index();
        const indexNumber = $(this).index();
        console.log(indexNumber);

        $('.modal').addClass('active');

        const imgArray = ['img/photo01.jpg','img/photo02.jpg','img/photo03.jpg'];
        console.log(imgArray);

        $('.modal-container img').attr('src','imgArray[indexNumber]');


    });

    $('.modal-container').on('click',function(){
        $('.modal').removeClass('active');
        

    });


});

