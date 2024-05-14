function muliplteBy5(num){
    return num*5
}

muliplteBy5.power=2

console.log(muliplteBy5(5));
console.log(muliplteBy5.power);
console.log(muliplteBy5.prototype);

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const chai = new createUser("chai", 25)
const tea = createUser("tea", 250)

chai.printMe()
