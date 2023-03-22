"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greet = "Hello Jay";
console.log(greet.toLowerCase());
// number
var userId = 334466;
// boolean
var loggedIn = false;
//any
var hero;
function getHero() {
    return "thor";
}
hero = getHero();

function addTwo(num) {
    return num + 2;
}
function makeUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) { }
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
addTwo(5);
makeUpper("jay");
signUpUser("jay", "jayvaghani2000@gmail.com", false);
loginUser("jay", "jayvaghani2000@gmail.com");
