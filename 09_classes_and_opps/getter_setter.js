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
        return `${this._password}Manisha`
    }

    set password(value){
        this._password = value
    }
}

const manisha = new User("man@ranish.ai", "abc")
console.log(manisha.email);