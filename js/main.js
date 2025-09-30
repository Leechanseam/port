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
    }    const text = "글자가 하나씩 나옵니다.";
    let i = 0;

    function type() {
      if (i < text.length) {
        document.getElementById("text").innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 150); // 글자 간 시간 (ms)
      }
    }

    type();
    })
})