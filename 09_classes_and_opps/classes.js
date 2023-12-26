// EcmaScript 6

class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

const userInfo = new User("mannu", "mannu@ranisha.com", "127")

console.log(userInfo.encryptPassword());
console.log(userInfo.changeUsername());

// Behind the scene

function Users(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

Users.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
Users.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const man = new Users("man", "man@gmail.com", "127")

console.log(man.encryptPassword());
console.log(man.changeUsername());