$(document).ready(function(){
    $(".skill_bg").each(function(i){
           let skill = $(this).find(".skill_bar")
           let num = 0;
           let percent = parseInt(skill.text());
           console.log(percent)
           skill.delay(i * 2000).animate({
            width : percent + "%"
           },function(){
           let increease = setInterval(function(){
                  num++
                  if(num > percent){
                    clearInterval(increease)
                  } else{
                    skill.text(num + "%")
                  }
            },30)
           })
           const textElements = document.querySelectorAll('.circle-text span');
const numberOfElements = textElements.length;
const angle = 360 / numberOfElements;

textElements.forEach((el, i) => {
    const rotateDegree = angle * i;
    el.style.transform = `rotate(${rotateDegree}deg) translateY(-150px)`;
});
    })















})