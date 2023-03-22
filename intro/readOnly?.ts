type user = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  credCardDetails?: cardDetails;
};

type cardNumber = {
  cardnumber: string;
};

type cardDate = {
  cardDate: string;
};
type cardCVV = {
  cardCVV: string;
};

type cardDetails = cardNumber & cardDate & cardCVV;
let cardDetail: cardDetails = {
  cardnumber: "111",
  cardDate: "ass",
  cardCVV: "sads",
};

let myUser: user = {
  _id: "1234",
  name: "j",
  email: "j@j.com",
  isActive: false,
  credCardDetails: cardDetail,
};

myUser.email = "111";
// myUser._id = "111";

export {};
