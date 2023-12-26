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

const userInfo = new User("mannu", "mannu@ranisha.com", "127")
const teach = new Teacher("man", "m@ranisha.com", "127")

userInfo.logMe();
teach.addCourse();
const newInfo = new User("Manisha")

newInfo.logMe()

console.log(userInfo === User);
console.log(userInfo instanceof User);