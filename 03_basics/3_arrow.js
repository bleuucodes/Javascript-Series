//////// this in An object
const user = {
    name:"anshuya",
    greeting : function (){
        console.log(`Welcome ${this.name}`)    //o/p Welcome anshuya
        console.log(this)                      //o/p  { name: 'anshuya', greeting: [Function: greeting] }
    }
}
// user.greeting()

// console.log(this)              //o/p {}




//////// this in function
function hi(){
    const first ="Anshuya"
    console.log(this.first)      //o/p undefined
    console.log(this)            // values
}
// hi()




/////// this in arrow function

const arrowFunc = () => {
    let name = "anshuya"
    console.log(this.name)      //o/p undefined
    console.log(this)           //o/p {}  //same as in node env global context
}

// arrowFunc()



