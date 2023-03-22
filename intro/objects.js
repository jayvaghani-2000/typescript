"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "jay",
    email: "jay@gmail.com",
    isActive: true,
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: "jay", isPaid: true, email: "jay@gmail.com" };
createUser(newUser);
// createUser({ name: "jay", isPaid: true, email: "jay@gmail.com" });
function createCourse(_a) {
    return { name: "React", price: 339 };
}
