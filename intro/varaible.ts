let greet: string = "Hello Jay";
console.log(greet.toLowerCase());

// number
let userId: number = 334466;

// boolean
let loggedIn: boolean = false;

//any

let hero: string;

function getHero() {
  return "thor";
}

hero = getHero();

function addTwo(num: number): number {
  return num + 2;
}

function makeUpper(val: string) {
  return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

addTwo(5);
makeUpper("jay");

signUpUser("jay", "jayvaghani2000@gmail.com", false);
loginUser("jay", "jayvaghani2000@gmail.com");

function getValue(myVal: number): string | boolean {
  if (myVal > 5) {
    return true;
  }
  return "200 OK";
}

const getHello = (s: string): string => {
  return "";
};

let heros: (string | number)[] = ["thor", "spiderman", 1];

heros.map((a) => {
  return a;
});

function consoleErr(errMsg: string): void {
  console.log(errMsg);
}
function handleErr(errMsg: string): never {
  throw new Error(errMsg);
}
consoleErr("");
handleErr("");

export {};