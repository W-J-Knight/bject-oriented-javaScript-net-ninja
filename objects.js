class User {
    constructor(email,name){
        this.email = email;
        this.name = name;
        this.score = 0;
    }
    login(){
        console.log(this.email, 'just logged in')
        return this
    }
    logout(){
        console.log(this.email, 'just logged out')
        return this
    }
    upScore(){
        this.score++;
        console.log(this.email, 'score is now', this.score)
        return this
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

userOne.login()
userTwo.logout()
userOne.upScore().login()