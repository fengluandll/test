/**
 * Created by Allbts-IT on 4/10/2016.
 */
jQuery.fn.println = function () {
    // Join all the arguments into a space-separated string
    var msg = Array.prototype.join.call(arguments," ");
    // Loop through each element in the jQuery object
    this.each(function () {
        jQuery(this).append(document.createTextNode(msg)).append("</br>");
    });
    return this;
};