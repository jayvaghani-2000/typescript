// kind of array with defined sequence

// use in multiple api res

const User: (string | number)[] = ["hc", 1];
const User1: (string | number)[] = [1, "hc"];

// tuple

const UserTuple: [string, number, boolean] = ["hc", 1, false];
const rgb: readonly [number, number, number] = [255, 255, 255];

UserTuple[0] = "jv";

// break protocol
UserTuple.push("aa");

// rgb[0] = 111;


export {};
