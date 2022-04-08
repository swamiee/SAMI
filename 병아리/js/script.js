window.addEventListener('wheel', scrollAni);
window.addEventListener('load', pfTitle);
var offset;
var sectionCounter = 0;
var wheelCounter = 0;

function scrollAni(e){
    wheelCounter++;
    var go = wheelCounter%5;
    if(e.wheelDelta>0){
        if(go == 0 && sectionCounter>0){
            console.log("위로");
            sectionCounter--;
        }
    }else{
        if(go == 0 && sectionCounter<5){
            console.log("아래로");
            sectionCounter++;
        }
    }
    
    offset = innerHeight*sectionCounter;

    $("html, body").stop().animate({scrollTop:offset},600,"easeInOutExpo");
    
}

 // 스크롤 막기 시작
 $('html, body').css({'overflow': 'hidden', 'height': '100%'});
 $('#element').on('scroll touchmove mousewheel', function(event) {
     event.preventDefault();
     event.stopPropagation();
     return false;
 });
 //스크롤 막기 끝

/* 타이틀 애니 */
window.addEventListener('load', pfTitle);
function pfTitle(){
    $(".pf_title").addClass("on");
    $(".titleText").addClass("on");
}

/* section 이동메뉴 */
$(".gnb li a").click(
    function(){
        sectionCounter = $(this).attr("dataNum");
        offset = innerHeight*sectionCounter;
        $("html, body").stop().animate({scrollTop:offset},600,"easeInOutExpo");
    }
);
/* .burger */
$(".burger").click(
    function(){
        $(this).toggleClass("on");
        $("#popupNav").toggleClass("on");
    }
);