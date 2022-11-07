var obj={
    john :{
        name:"john",
        age:50,
        gender:"male"
    },
    rita:{
        name:"rita",
        age:20,
        gender:"female"
    }
}
console.log(`Age of rita: ${obj.rita.age}`)

delete obj.rita

for(var i in obj){
    console.log(obj[i])
}
