class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password
    }
    
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const test=new Teacher("test","test@gmail.com","test");
console.log(test)
console.log(test.addCourse())

const test2=new User("test@gmail.com")
console.log(test2.logMe())

console.log(test===Teacher)
console.log(test instanceof User)