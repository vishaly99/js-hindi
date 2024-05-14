function User(email,password){
    this.email=email;
    this.password=password;

    Object.defineProperty(this,'email',{
        get:function(){
            return this._email
        },
        set:function(value){
            this._email=value
        }
    })
    Object.defineProperty(this,'password',{
        get:function(){
            return this._password
        },
        set:function(value){
            this._password=value
        }
    })
}

const vishal=new User("vishalyennam@gmail.com","vishalyennam")
console.log(vishal.password)