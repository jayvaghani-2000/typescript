"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 33;
score = 44;
score = "55";
var jay = { userName: "jay", id: 23 };
jay = { name: "jay", id: 23 };
// function getDbId(id: number | string) {
//   console.log(id);
// }
function getDbId(id) {
    if (typeof id === "number") {
        console.log("id", id);
    }
    else {
        id.toLowerCase();
    }
}
getDbId(3);
getDbId("3");
var pi = 3.14;
var seatAllotment;
seatAllotment = "middle";
