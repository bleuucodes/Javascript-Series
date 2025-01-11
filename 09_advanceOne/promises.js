//**** 1 promise created from new Promise(callback fn) 
const promiseOne = new Promise(function(resolve,reject){
    setTimeout(() => {
        // console.log("Promise1 is made!")
        resolve()
    }, 1000);
})

promiseOne.then(function(){
    // console.log("promise1 is consumed")
})


//***** 2 promise directly created without holding in a variable
new Promise(function(resolve,reject){
    setTimeout(() => {
        // console.log("Promise2 is made!")
        resolve()
    }, 1000);
}).then(function(){
    // console.log("promise2 is consumed")
})


//**** 3 resolve passing fn 
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(() => {
        // console.log("Promise3 is made!")
        resolve({user: "Anshuya" , email: "anshuyarawat8@gmail.com"})
    }, 1000);
})

promiseThree.then(function(user){
    // console.log(user)
    // console.log("promise3 is consumed")

})


//**** 4 reject() fn, catch(), finally()
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
    let error = false;
    if(!error){
        resolve({username: "Anshuya" , email: "anshuyarawat8@gmail.com"})
    }else{
        reject('Error : Something went wrong.')
    }
},1000)
})

promiseFour
.then((user) => {
    // console.log(user)
    return user.username
}).then((username) => {
    // console.log(username)  // "Anshuya" if error = false
}).catch(error => {
    // console.log(error)   // "Error : Something went wrong."  if error = true
}).finally(() => {
    // console.log("promise is either resolved or rejected")  // print message either true or false
})


// async await to accept the file (catch is not handled gracefully in this)
// try and catch
const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "Anshuya" , email: "anshuyarawat8@gmail.com"})
        }else{
            reject('Error : Something went wrong.')
        }
    },1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log('error!')
    }
}

consumePromiseFive()

//*** using fetch(promise) url
// async function getAllUsers(){
//     try{
//         const response = await fetch('https://api.github.com/users/hiteshchoudhary')
//         const data = await response.json()
//         console.log(data)
//     }catch(error){
//         console.log("error" , error)
//     }
    
// }
// getAllUsers()

//*** using then catch for above code
fetch('https://api.github.com/users/hiteshchoudhary')
.then(response => {
   return response.json()
}).then(data => console.log(data))
.catch( error => console.log(error))


