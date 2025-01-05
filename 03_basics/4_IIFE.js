///IIFE IN named function

///UNNAMED IIFE
(function hi(){
    console.log("hi")
})();


//// NAMED IIFE
((name) => {
    console.log(`hi ${name}`)
})("anshuya")