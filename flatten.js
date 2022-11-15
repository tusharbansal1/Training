// const arr=[1,2,3,[4,5]]
// console.log(arr.flat())
 
// const arr1=[1,2,3,[4,5,[6,7,8]]]
// console.log(arr1.flat()) //returns elements of 1st array and 2nd as array
// console.log(arr1.flat(2))//returns all elements for depth 2


const array=[1,2,3,4,[5,6,[7,[8]]]]
const flatten =(arr)=>{
    const result = arr.reduce((acc ,item)=>{
        if(Array.isArray(item)){
            const subArray = flatten(item)
            acc = acc.concat(subArray)
        }else{
            acc.push(item)
        }
        return acc
    } ,[])

   return result
}
console.log(flatten(array))