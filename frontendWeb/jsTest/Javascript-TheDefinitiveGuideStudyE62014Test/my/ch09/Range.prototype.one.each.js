function Range(from,to) {
    this.from = from;
    this.to = to;
}

Range.prototype.includes = function (x) {
    return this.from<=x && x<=this.to;
};

Range.prototype.foreach = function (f) {
    for(var x = Math.ceil(this.from); x <= this.to; x++) f(x);
};

Range.prototype.toString = function () {
    return "(" + this.from + "..." + this.to + ")";
};

var r = new Range(10,20);
console.log(r);