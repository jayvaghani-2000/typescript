// user => email, google id, dbid, code

// like class
interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  startTrial: () => string;
  getCoupon: (couponname: string) => number;
}

interface User {
  githubToken: string;
}

interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

type UserType = {
  email: string;
  age: number;
};

const jay: User = {
  dbId: 22,
  email: "hotelH",
  userId: 2211,
  startTrial: () => "Start trial",
  getCoupon: () => {
    return 11;
  },
  githubToken: "",
};
const ram: Admin = {
  dbId: 22,
  email: "hotelH",
  userId: 2211,
  startTrial: () => "Start trial",
  getCoupon: (a) => {
    return 11;
  },
  githubToken: "",
  role: "admin",
};
