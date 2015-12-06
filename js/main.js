$(function(){
    $(window).scroll(function() {
        if ($(this).scrollTop() >=670) {
            $('nav.main-nav').addClass('stickytop');
        }
        else {
            $('nav.main-nav').removeClass('stickytop');
        }
			//  var scroll = $(window).scrollTop();
			// 	  console.log(scroll);
    });

});
// start of slide in

$('.Android1click').click(function () {
    $('#Android1Slide').animate({
        width: 'toggle'
    }, "slow")
});
$('.Android2click').click(function () {
    $('#Android2Slide').animate({
        width: 'toggle'
    }, "slow")
});
$('.web1click').click(function () {
    $('#Web1Slide').animate({
        width: 'toggle'
    }, "slow")
});
$('.web2click').click(function () {
    $('#Web2Slide').animate({
        width: 'toggle'
    }, "slow")
});
$('.web3click').click(function () {
    $('#Web3Slide').animate({
        width: 'toggle'
    }, "slow")
});

// stop of slide in
