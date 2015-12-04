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

});
// start of slide in

$('.imagesDiv-link').click(function () {
    $('#imagesDiv').animate({
        width: 'toggle'
    }, "slow")
});


// stop of slide in
