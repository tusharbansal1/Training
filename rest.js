function rest(...input){
    console.log(input) //returns array
}
rest(1,2,3,4,5,6)

function re(...input){
    console.log(...input) //returns values
}
re(1,2,3,4,5,6)

function sum(...inputs){ 
    let total=0
    for(let i of inputs){ 
        total += i
    }
    console.log(total)
}
sum(1,2,3,4,5,6,7,8,9)

function fun(a,b,...c){
    console.log(`${a} ${b}`) //returns first two elements
    console.log(c) //returns all alemets as array after a and b
    console.log(c[0]) //returns abc
    console.log(c.indexOf('Eden')) //returns 1
}
fun('Ronaldo','Neymar','abc','Eden','def')