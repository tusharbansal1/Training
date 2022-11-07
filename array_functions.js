const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString());
console.log(fruits.join("+"))
console.log(fruits.pop())//returns last element popped out
console.log((fruits.push("Watermelon"))) //returns new array length add to end
console.log(fruits.shift())//return first element popped put
console.log(fruits.unshift("New"))//return new array length add to beginning

const Girls = ["Abc","def"];
const Boys = ["tushar","bansal"];

const Children = Girls.concat(Boys);
console.log(Children)//add two arrays

fruits.splice(2,0,"Lemon") //add 2nd postion 0 elements to be removed
console.log(fruits)

const citrus=fruits.slice(2) //slice out part of array from 2, create new array removes nothing
console.log(citrus)

const cit=fruits.slice(1,3)// slice out from 1 to 3 but not the 3rd one
console.log(cit)

