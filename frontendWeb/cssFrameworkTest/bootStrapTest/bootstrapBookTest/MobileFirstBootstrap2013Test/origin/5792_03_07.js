Modernizr.load({
  test: Modernizr.touch && Modernizr.csstransitions,
  yep: 'carousel-swipe.js',
  complete: function() {
      buildTouch();
  }
});