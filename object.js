var a={
    name : "tushar",
    age: 20,
    profession: "student"
}
console.log(a)

a.sname="bansal" //add new property
console.log(a)

a.profession="developer";// change value of current property
console.log(a)

delete a.age //delete a property
console.log(a)
//SET
const letters=new Set();
const a1="a";
const b1="b"
const c1="c"

letters.add(a1)
letters.add(b1)
letters.add(c1)

console.log(letters.size)

//MAP
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
console.log(fruits.get("apples"))  

//using constructor
function person(fname,fage){
    this.fname=fname;
    this.fage=fage
}
const p1=new person("abc",20)
console.log(p1.fage)

//nested object and arrays
let x=""
const myObj={
    cars:[
        {name:"BMW",models:["X1","320d"]},
        {name:"Ford", models:["Fiesta","Mustang"]}
    ]
}
for(let i in myObj.cars){
    x+= myObj.cars[i].name + "\n"
    for(let j in myObj.cars[i].models){
        x+= myObj.cars[i].models[j] +"\n"
    }
}

console.log(x)