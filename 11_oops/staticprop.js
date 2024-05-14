class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`Username:${this.username}`);
    }
    createId(){
        return `123`
    }
}

const vishal=new User("vishal")
console.log(vishal.createId());
console.log(vishal.logMe());

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
}

const iphone=new Teacher("iphone","iphone@gmail.com")
console.log(iphone.logMe())