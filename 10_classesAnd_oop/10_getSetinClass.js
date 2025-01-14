class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value
    }
}

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.email);

class Student{
    constructor(rollNo,sName,sClass,contact){
        this.rollNo = rollNo;
        this.sName = sName;
        this.sClass = sClass;
        this.contact = contact;
    }
    get contact(){
        return this._contact/2
    }
    set contact(contact){
        this._contact = contact*2
    }
}

const student1 = new Student(1,'anshuya',8,9528719000)
// console.log(student1.sName)
// console.log(student1.rollNo)
// console.log(student1)
// console.log(student1.contact)



