$(document).ready(function(e) {
  $("#banner-main").unslider({
    speed: 900, //  The speed to animate each slide (in milliseconds)
    delay: 4000, //  The delay between slide animations (in milliseconds)
    complete: function() {}, //  A function that gets called after every slide animation
    keys: true, //  Enable keyboard (left, right) arrow shortcuts
    dots: true, //  Display dot navigation
    fluid: true //  Support responsive design. May break non-responsive designs
  });
});
//平缓滑动
function scroll(id) {
  $("#" + id).HoverTreeScroll(1000);
};
//点击导航切换
$('.nav-contain').on('click','.nav-list',function(){
  $(this).addClass('active').siblings().removeClass('active');
});
//我们的客户
$(".our-customer .list-common").hover(function(){
  $(this).addClass('hover-in');
},function(){
  $(this).removeClass('hover-in');
});
//解决方案点击
$(".common-2-contain").on("click",'.solution-contain',function(){
  //通过判断按钮btn有没有active这个class名判断是否已经点击过
  if($(this).hasClass("active-in")){

  $(this).removeClass("active-in");
  }else{
  $(this).addClass("active-in").siblings().removeClass('active-in');
  }
  // $(this).addClass('active-in');
});
//scroll
$(window).scroll(function(e) {
  var winPos = $(window).scrollTop();
  if(winPos>0){
    $('.nav-top').addClass('nav-scroll');
  }else{
    $('.nav-top').removeClass('nav-scroll');
  }
});


