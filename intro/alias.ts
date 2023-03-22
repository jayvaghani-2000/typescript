type user = {
  name: string;
  email: string;
  isActive: boolean;
};

const User = {
  name: "jay",
  email: "jay@gmail.com",
  isActive: true,
};

function createUser(user: user): user {
  return user;
}

createUser(User);

export {};
