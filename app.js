

/* ヘッダー固定*/ 

// $(document).ready(function(){
//     var pos = $(".header").offset().top;
//     var height = $(".header").outerHeight();
//     $(window).scroll(function () {
//         if ($(this).scrollTop() > pos) {
//             $(".header").addClass("fixed");
//             $("body").css("padding-top", height);
//         } else {
//             $(".header").removeClass("fixed");
//             $("body").css("padding-top", 0);
//         }
//     });
// });

// const navbar = document.querySelector(".navbar");
// const menu = document.querySelector(".menu");

// window.addEventListener("scroll",() => {
// 	if(window.pageYOffset >= menu.offsetTop) {
// 		navbar.classList.add("sticky");
// 	} else {
// 		navbar.classList.remove("sticky");
// 	}
// });


$(function() {
  //スクロール位置を監視

  window.addEventListener('scroll',function () {
    this.sessionStorage.setItem('scrollPosition',window.pageYOffset);
  });

  //ページ読み込み時にスクロール位置を復元
  
  window.addEventListener('load',function (){
    const scrollPosition = this.sessionStorage.getItem('scrollPosition');
    if(scrollPosition){
      window.scrollTo(0,parseInt(scrollPosition));
    }
  });

 // へッダースクロールすると、固定//
 window.addEventListener('scroll',function() {
  const nav_menu = document.querySelector("#nav_menu");
  const headerHeight = nav_menu.offsetHeight;

  if(this.window.scrollY > headerHeight) {
    $("#nav_menu").addClass("m_fixed");
    document.body.style.paddingTop = headerHeight + 'px';
  } else {
    nav_menu.classList.remove("m_fixed");
     document.body.style.paddingTop = '0';
 }
});
});