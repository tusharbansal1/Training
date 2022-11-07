function sp(a,b,c){
    return a+b+c
}
let arr=[1,2,3]
console.log(sp(...arr))

let arr1=[1,2,3]
let arr2=[2,3,4]
console.log([...arr1,...arr2]) //concat

let arr3=[1,2,3] 
let arr4=[...arr3,4,5]
console.log(arr4) 
console.log(arr3) //nochange in previous array