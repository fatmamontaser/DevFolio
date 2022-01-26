var typed = new Typed("#typed", {
  stringsElement: '#typed-strings',
  typeSpeed:100,
  backSpeed: 100,
  backDelay: 500,
  startDelay: 1000,
  loop: true,
 
});

let offstTop =$("#About").offset().top
 $(window).scroll(function(){
 let scrollTop = $(window).scrollTop();
 if(scrollTop>offstTop){
   $("#main-nav").css("background-color","rgba(0, 0, 0, 0.9)");
   $(".arrow").css("opacity","0.8")
 }
 else{
  $("#main-nav").css("background-color","transparent")
  $(".arrow").css("opacity","0")
 }
 })

 $(".nav-link").click(function(e){
let hrefat = $(e.target).attr("href")
let offstTop = $(hrefat).offset().top
  $("body,html").animate({scrollTop:offstTop},1000)
 })

 ////////////////////////////////////////////////
$(".arrow").click(function(){
  $("body,html").animate({scrollTop:"0px"},500)
})


$("document").ready( function(){

  $(".lds-spinner").slideUp(1000,function(){
    $("body").css("overflow","auto")
  })

})

////////////////////////////////////////////////////

$(".setting-icon").click(function(){
  let auterwidth = $(".innerbox").outerWidth()
  let icon = $(".icon").css("left")
  if(icon == "0px"){
    $(".icon").animate({left :`-${auterwidth}px`},1000)

  } else{

    $(".icon").animate({left :`0px`},1000)
  }
})


$(".box").eq(0).css("background-color","#F9D5A7")
$(".box").eq(1).css("background-color","#FC997C")
$(".box").eq(2).css("background-color","grey")



$(".box").click(function(e){
  let event = $(e.target).css("background-color")
  $("h1").css("color",event)
})
///////////////////////////////////
let cardImg = Array.from(document.querySelectorAll(".card-img img"));
let  backgroundlight = document.querySelector(".back-ground-light");
let  backgroundlightitem = document.querySelector(".back-ground-light-item ");
let  prev = document.getElementById("prev");
let closeBtn = document.getElementById("close");
let  next = document.getElementById("next");
let currentIndex = 0;
 


for( let i=0 ;i<cardImg.length; i++ ){
  cardImg[i].addEventListener("click",function(e){
    backgroundlight.style.display="flex"
    currentIndex= cardImg.indexOf(e.target)
    console.log(currentIndex)
    let srcimg = e.target.getAttribute("src")
       backgroundlightitem.style.backgroundImage =`url(${srcimg})`
     
  })

}
 
closeBtn.addEventListener("click",closeFun)
function closeFun() {
  backgroundlight.style.display="none"
}
 next.addEventListener("click", nextBtn)
  function nextBtn(){
    currentIndex++;
    if (currentIndex == cardImg.length) {
      currentIndex = 0
  }
  
     let curSrc = cardImg[currentIndex].getAttribute("src")
     backgroundlightitem.style.backgroundImage =`url(${curSrc})`
 }


 prev.addEventListener("click", prevBtn)
 function prevBtn(){
  currentIndex--;
   if ( currentIndex < 0) {
    currentIndex = cardImg.length - 1
 }
    let curSrc =  cardImg[currentIndex].getAttribute("src")
    backgroundlightitem.style.backgroundImage =`url(${curSrc})`
}

document.addEventListener("keydown",function(e){

  if(e.code == "ArrowRight"){

    nextBtn()
  }
  else if(e.code == "ArrowLeft"){
    prevBtn()

  }
  else if(e.code == "Escape"){
 
    closeFun()
  }
})
////////////////////////////////

