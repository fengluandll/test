String.prototype.trim = String.prototype.trim || function () {
      if (!this) return this;
        return this.replace(/^s+|s+$/g,"");
    };

    var s = "  abc  ";
console.log("'" + s + "'");

console.log("'" + s.trim() + "'");