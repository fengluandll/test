jQuery.expr[':'].data = function(element, index, match, array) {
// Note: IE7 and before do not implement hasAttribute()
    return element.hasAttribute("data-" + match[3]);
};