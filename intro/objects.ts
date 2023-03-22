const User = {
  name: "jay",
  email: "jay@gmail.com",
  isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {}

let newUser = { name: "jay", isPaid: true, email: "jay@gmail.com" };

createUser(newUser);

// createUser({ name: "jay", isPaid: true, email: "jay@gmail.com" });

function createCourse({}): { name: string; price: number } {
  return { name: "React", price: 339 };
}

export {};
