function codeLatLng(lat, lng) {
	var latlng = new google.maps.LatLng(lat, lng);
	geocoder.geocode({'latLng': latlng}, function(results, status)      {
		if (status == google.maps.GeocoderStatus.OK) {
			 //results object available
			address_line = results[0].formatted_address;
		}
	});
   }