geocoder = new google.maps.Geocoder();	
if (navigator.geolocation) {
 	navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
}
//Get the latitude and the longitude;
function successFunction(position) {
	var lat = position.coords.latitude;
	var lng = position.coords.longitude;
	codeLatLng(lat, lng)
}
function errorFunction(){
	alert("Geocoder failed");
}