$(document).ready(function(){
    $("#projectjs1-2").hide();
    $("#projectjs1-1").click(function(){
        $("#projectjs1-2").fadeToggle(1000)
    })
$("#projectjs1-3").hide();
$("#projectjs2").click(function(){
    $("#projectjs1-3").fadeToggle(1000)
})
$("#projectjs1-4").hide();
$("#projectjs3").click(function(){
    $("#projectjs1-4").fadeToggle(1000)
})
$("#projectjs1-5").hide();
$("#projectjs4").click(function(){
    $("#projectjs1-5").fadeToggle(1000)
})

    $('.photo1').hover(
        function() {
            $(this).addClass('zoomed');  // 마우스 올렸을 때 클래스 추가
        },
        function() {
            $(this).removeClass('zoomed');  // 마우스 떼면 클래스 제거
        }
    );



})

