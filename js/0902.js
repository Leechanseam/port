$(document).ready(function(){
    $(".gnb>li>a").on("click",function(e){
    console.log(this.hash)
    // let hash=this.hash;
    e.preventDefault();
    if(this.hash !== ""){
        let hash=this.hash;
        // $(window).scrollTop();
        // let topSec = $(hash).offset().top
        $("html,body").animate({
            scrollTop : $(hash).offset().top
        },800) 
    }
    })
    $("btn_top").hide();
  $(window).scroll(function(){
      if($(this).scrollTop() < 800){
        $("#btn_top").hide(800);
      }else if($(this).scrollTop() < 1000){
        $("#btn_top").fadeIn(800);
      }else if($(this).scrollTop() < 3000){
        $("#btn_top").fadeIn(800);
      }
  })


 $(window).resize(function(){
    reszeable()
 })

 function reszeable(){
     if($(window).width() < 700){
     console.log('모바일에서 실행될 스크립트') 
     }else if($(window).width() < 1200){
        console.log('테블릿 에서 실행될 스크립트') 
     }else{
         console.log('데스크탑에서 실행될 스크립트')
     }
 }
 reszeable()

function test(){
    alert("test")
}


$("#btn_top").on("click",function(){
   $("html,body").animate({
       scrollTop : 0
   },500)
})
}) //제이쿼리끝