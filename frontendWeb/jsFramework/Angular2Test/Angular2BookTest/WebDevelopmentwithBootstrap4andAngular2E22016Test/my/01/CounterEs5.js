function Counter() {
    var _this = this;
    this.age = 30;
    setTimeout(function () {
        _this.age++;
        console.log(_this.age);
    },3000);
}

new Counter();