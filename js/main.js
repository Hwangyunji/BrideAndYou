$(function () {

   
    $('#toggle-btn').click(function(){
        $('#sidebar').addClass('on');
    });

    $('#close-btn').click(function(){
        $('#sidebar').removeClass('on');
    });
      

    // slider
    let num = 0; // 이미지 번호

    function changeSlider(img_num) {
        // 공식 = 높이값(세로기준) * 이미지 번호
        let img_width = -1920 * img_num;

        $('.slider .sliders').css({
            transform: `translateX(${img_width}px)`
        })
    }

    // 자동재생
    setInterval(function(){
        num++;
        if(num > 3) { num = 0 }
        changeSlider(num);
    }, 3000)

}); // $