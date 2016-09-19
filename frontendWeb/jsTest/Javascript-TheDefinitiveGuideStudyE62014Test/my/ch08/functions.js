

function printProps(o) {
    for (var p in o){
        console.log(p + ": " + o[p] + "\n");
    }
}

var basicO = {
    name: "basicO",
    methods: "none"
};

printProps(basicO);

// Compute the distance between Cartesian points (x1,y1) and (x2,y2).
function distance(x1,y1,x2,y2) {
    var dx = x1 - x2;
    var dy = y1 - y2;
    return Math.sqrt(dx*dx + dy*dy);
}

function factorial(x) {
    if (x <= 1) return 1;
    return x*factorial(x-1);
}

console.log(factorial(3));

var data = [3,2,4,5];

data.sort(function (a, b) {
    return a - b;
});

console.log(data);

var tensquared = (function (x) {
    return x * x;
}(10));

console.log(tensquared);

