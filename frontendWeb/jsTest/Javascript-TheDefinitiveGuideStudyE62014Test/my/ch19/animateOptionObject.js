$("#sprite").animate({
    opacity: .25, // Animate opacity to .25
    fontSize: 10 // Animate font size to 10 pixels
}, {
    duration: 500, // Animation lasts 1/2 second
        complete: function() { // Call this function when done
        this.text("Goodbye"); // Change element text.
    }
});