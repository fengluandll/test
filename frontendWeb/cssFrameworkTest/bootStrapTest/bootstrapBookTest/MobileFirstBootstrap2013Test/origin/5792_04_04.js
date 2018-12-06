$(function(){
	$('form[role="search"]').on('submit', function(e){
	  $('#refresh').html('<div class="progress progress-striped active">' +
	  '<div class="progress-bar"  role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style="width: 100%">' +
	  '<span class="sr-only"></span>' +
	  '  </div>' +
	  '</div>'
	);
	var search = $('input[name="search"]').val();
	var latlang = $('input[name="latng"]').val();
	var action_url = e.target.action;
	$('#refresh').load(action_url, {q: search, latlang: latlang});
	return false;
	});
});