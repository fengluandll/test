// Pass duration and callback as object properties instead of arguments
$("#message").fadeIn({
    duration: "fast",
    complete: function() { $(this).text("Hello World"); }
});