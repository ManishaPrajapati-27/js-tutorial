function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)
    this.email = email
    this.password = password
}

const userInfo = new createUser("mannu", "mannu@Ranisha.com", "127")
console.log(userInfo);