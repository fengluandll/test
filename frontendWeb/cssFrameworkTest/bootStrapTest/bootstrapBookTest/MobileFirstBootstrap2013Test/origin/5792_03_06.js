$.responsiveHub("ready", ["phone", "tablet", "web"], 	function(event) {
  	alert(event.layout); // Current layout
  	alert(event.touch);  // supports touch events
});