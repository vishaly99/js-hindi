// document.getElementById("photoshop").onclick=function(){
//     alert("Hey you clicked on photoshop image")
// }

//event propagation
//event bubbling(by default false)
//event capturing 

//basically if you click on photoshop image at that the first function will call photoshop after that image function
//if you put true then image function will call after that photoshop will call

//if you want to stop to call all the function then write e.stopPropagation() in the main function

document.getElementById("images").addEventListener('click',function(e){
    console.log("clicked inside the ul")
},false)

document.getElementById("photoshop").addEventListener('click',function(e){
    console.log("Hey you clicked on photoshop image")
    //e.stopPropagation()
},false)


document.querySelector("#images").addEventListener("click",function(e){
    console.log(e.target.parentNode);
    // let removeIt=e.target.parentNode
    // removeIt.remove(removeIt);
    if(e.target.tagName==="IMG"){
        let removeIt=e.target.parentNode
        removeIt.remove()
    }
},false)

