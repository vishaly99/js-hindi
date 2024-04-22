//Immediately Invoked Function Expressions IIFE

(function(){
    console.log("This is a function")
})();

( (name) => {
    console.log(`${name} this is your website`);
}
)("test")