class User{
    constructor(email,password){
        this.email=email
        this.password=password
    }
    get password(){
        return this._password
    }
    set password(value){
        this._password=value.toUpperCase()
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email=value
    }
}
const vishal=new User("vishalyennam@gmail.com","vishalyennam")
console.log(vishal.password)