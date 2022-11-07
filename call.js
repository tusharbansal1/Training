const obj={
    name:"Tushar",
    sname:"Bansal",
    feature: function(rate){
        console.log(`very friendly. ${this.name} has sir name ${this.sname}. Rating is ${rate}`)
    }
}
obj.feature(4)
  
const obj1={
    name: "abc",
    sname:"def"
}
obj.feature.call(obj1,5)