function giveTouch() {
	$('#layers').on('swiperight', function(){
		$(this).carousel('prev');
	}).on('swipeleft', function(){
		$(this).carousel('next');
	});
}
$(document).ready(function(){
	if(window.DocumentTouch && document instanceof DocumentTouch) {
	  giveTouch();
	}
});