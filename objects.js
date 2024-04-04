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

class Admin extends User{
    deleteUser(user){
        users = users.filter(u => {
            return u.email != user.email
        })
    }
}

let userOne = new User('ryu@ninjas.com', 'Ryu');
let userTwo = new User('yoshi@mariokorp.com', 'Yoshi');
var admin = new Admin("admin@ninjas.com", 'shaun')
console.log(userOne)
console.log(userTwo)

// the 'new' keyword
// - create a new empty object {}
// - sets the value of 'this' to be the new empty object
// - calls the constructor method

userOne.login()
userTwo.logout()
userOne.upScore().login()
var users = [userOne, userTwo, admin]

admin.deleteUser(userOne)
console.log(users)