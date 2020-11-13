$(document).ready(function(){
$('.icon-up-open').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});
 
	$(window).scroll(function(){
		if( $(this).scrollTop() > 1800 ){
			$('.icon-up-open').slideDown(300);
		} else {
			$('.icon-up-open').slideUp(0);
		}
	});

$('.mover').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {
        var $target = $(this.hash);
        $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
    if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body').animate({scrollTop: targetOffset}, 1200);
        return false;
        }
        }
    });
});