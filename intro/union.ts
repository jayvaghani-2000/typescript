let score: number | string = 33;

score = 44;
score = "55";

type User = {
  name: string;
  id: number;
};

type Admin = {
  userName: string;
  id: number;
};

let jay: User | Admin = { userName: "jay", id: 23 };

jay = { name: "jay", id: 23 };

// function getDbId(id: number | string) {
//   console.log(id);
// }
function getDbId(id: number | string) {
  if (typeof id === "number") {
    console.log("id", id);
  } else {
    id.toLowerCase();
  }
}

getDbId(3);
getDbId("3");

let pi: 3.14 = 3.14;

let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "middle";


export {};
