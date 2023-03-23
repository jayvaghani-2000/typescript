"use strict";
class User {
    constructor(email, name) {
        this.city = "Surat";
        this._count = 1;
        this.email = email;
        this.name = name;
    }
    get getAppleEmail() {
        return this.name;
    }
    get count() {
        return this._count;
    }
    set setCount(newCount) {
        if (newCount <= 1) {
            throw new Error("course count should be more than one");
        }
        this._count = newCount;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCount() {
        this._count = 4;
    }
}
class User1 {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.city = "Surat";
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
