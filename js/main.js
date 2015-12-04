$(function(){
    $(window).scroll(function() {
        if ($(this).scrollTop() >=670) {
            $('nav.main-nav').addClass('stickytop');
        }
        else {
            $('nav.main-nav').removeClass('stickytop');
        }
				//  var scroll = $(window).scrollTop();
				//  console.log(scroll);
    });
    $(".btn-minimize").click(function(){
    $(this).toggleClass('btn-plus');
    $(".widget-content").slideToggle();
  });
});
// start of slide in
// jQuery(function($) {
//
//     $('a.panel').click(function() {
//         var $target = $($(this).attr('href')),
//             $other = $target.siblings('.active');
//
//         if (!$target.hasClass('active')) {
//             $other.each(function(index, self) {
//                 var $this = $(this);
//                 $this.removeClass('active').animate({
//                     left: $this.width()
//                 }, 500);
//             });
//
//             $target.addClass('active').show().css({
//                 left: -($target.width())
//             }).animate({
//                 left: 0
//             }, 500);
//         }
//     });
//
// });
// stop of slide in
