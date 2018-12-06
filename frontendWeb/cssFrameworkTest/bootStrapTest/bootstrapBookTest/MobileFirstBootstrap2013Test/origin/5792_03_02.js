$(document).ready(function(){
	$('#layers').on('swiperight', function(){
		$(this).carousel('prev');
	}).on('swipeleft', function(){
		$(this).carousel('next');
	});;
});