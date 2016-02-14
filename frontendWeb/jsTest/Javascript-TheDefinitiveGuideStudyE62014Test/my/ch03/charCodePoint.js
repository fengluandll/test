var p = ""; // π is 1 character with 16-bit codepoint 0x03c0
var e = "\u1d452"; // e is 1 character with 17-bit codepoint 0x1d452
p.length // => 1: p consists of 1 16-bit element
e.length // => 2: UTF-16 encoding of e is 2 16-bit values: "\ud835\udc52"
;