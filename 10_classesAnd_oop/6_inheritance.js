class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")

chai.logMe()
const masalaChai = new User("masalaChai")

masalaChai.logMe()

// console.log(chai instanceof Teacher);  //true
// console.log(chai instanceof User);  // true
// console.log(Teacher instanceof User);  //false
// console.log(User instanceof Teacher);  //false
// console.log(User === Teacher);   //false
// console.log(User)
// console.log(Teacher)
console.log(chai)
console.log(masalaChai)


