var calculator = {
    operand1: 1,
    operand2: 1,
    add: function() {
        // Note the use of the this keyword to refer to this object.
        this.result = this.operand1 + this.operand2;
    }
};

calculator.add(); // A method invocation to compute 1+1.
console.log(calculator.result); // => 2