
const alphas = ["a","b","c"]
const numb = [1,2,3,4]
const combinedArray = [...alphas,...numb]
// console.log(combinedArray)

const nestedArray = [1,2,[3],[4,5,6,[7,8]]]
const flatenArray = nestedArray.flat(1)

console.log(flatenArray)