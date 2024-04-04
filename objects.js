class User {
    constructor(email,name){
        this.email = email;
        this.name;
    }
}

let userOne = new User('ryu@ninjas.com', 'Ryu');
let userTwo = new User('yoshi@mariokorp.com', 'Yoshi');
console.log(userOne)
console.log(userTwo)

// the 'new' keyword
// - create a new empty object {}
// - sets the value of 'this' to be the new empty object
// - calls the constructor method