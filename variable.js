"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greet = "hello";
console.log(greet);
var userid = 1;
userid.toFixed();
function getUpper(val) {
    return val.toUpperCase();
}
getUpper(5);
var login = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
login("h", "g");
function add(a, b) {
    return a + b;
}
function greets(name) {
    if (name) {
        console.log("Hello, ".concat(name, "!"));
    }
    else {
        console.log("Hello!");
    }
}
var person = {
    name: "Alice",
    age: 30,
    email: "alice@example.com",
};
var todos = [
    { id: 1, task: "Complete homework", completed: false },
    { id: 2, task: "Go to the gym", completed: true },
    { id: 3, task: "Buy groceries", completed: false },
];
function processResult(result) {
    if (typeof result === "number") {
        console.log("The result is ".concat(result, "."));
    }
    else {
        console.log("The result is \"".concat(result, "\"."));
    }
}
processResult(10);
processResult("Error");
var circle = {
    radius: 5,
    area: function () {
        return Math.PI * Math.pow(this.radius, 2);
    },
};
console.log("Area of the circle:", circle.area());
var myCar = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
};
var colors = {
    red: "#FF0000",
    green: "#00FF00",
    blue: "#0000FF",
};
console.log(colors.red);
var calculator = {
    add: function (x, y) { return x + y; },
    subtract: function (x, y) { return x - y; },
};
console.log("Addition:", calculator.add(5, 3));
console.log("Subtraction:", calculator.subtract(5, 3));
