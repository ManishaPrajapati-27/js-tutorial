const User = {
    _email: 'man@manisha.com',
    _password: "abc",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const hero = Object.create(User);
console.log(hero.email);