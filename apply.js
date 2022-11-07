const obj={
    name:"Tushar",
    sname:"Bansal",
    feature: function(rate,grade){
        console.log(`very friendly. ${this.name} has sir name ${this.sname}. Rating is ${rate}
        and grade is ${grade}`)
    }
} 

const obj1={
    name: "abc",
    sname:"def"
}
obj.feature.apply(obj1,[5,"hundred"])
 
let max=Math.max(1,2,3)
console.log(max)

let arrmax=Math.max.apply(null, [1,2,3,4,5,6,7])
console.log(arrmax)