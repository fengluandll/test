geocoder.geocode({'latLng': latlng}, function(results, status) {
  var address_line;
  if (status == google.maps.GeocoderStatus.OK) {
       if (results[1]) {
	address_line = results[0].formatted_address;
	$('#user-location').val(address_line);
         $('input[name="latlng"]').val(lat+','+lng);
     } else {
       alert("No results found");
     }
   } else {
     alert("Geocoder failed due to: " + status);
   }
});