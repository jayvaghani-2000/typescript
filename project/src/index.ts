class User {
  email: string;
  public name: string;
  private readonly city: string = "Surat";
  protected  _count: number = 1;
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }

  get getAppleEmail(): string {
    return this.name;
  }
  get count(): number {
    return this._count;
  }
  set setCount(newCount: number) {
    if (newCount <= 1) {
      throw new Error("course count should be more than one");
    }
    this._count = newCount;
  }
}

class SubUser extends User {
  isFamily: boolean = true;
  changeCount() {
    this._count = 4;
  }
}
class User1 {
  readonly city: string = "Surat";
  constructor(public email: string, public name: string) {
    this.email = email;
    this.name = name;
    this.city = name;
  }
}

const jay = new User("1", "jay");
const jay1 = new User1("1", "jay");
jay.name;
// jay.city;

// modifier keyword (public and private)
