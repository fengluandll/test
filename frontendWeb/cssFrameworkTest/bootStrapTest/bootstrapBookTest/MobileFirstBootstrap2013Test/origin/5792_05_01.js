Modernizr.load({
  test: Modernizr.geolocation,
  yep : 'geolocation.js',
  nope: 'find-by-ip.js'
});