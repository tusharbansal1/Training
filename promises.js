let obj=new Promise(function(resolve,reject){
    setTimeout(()=>{
    let roll_no=[1,2,3,4,5]
    resolve(roll_no)
    reject("Error while communicating")
    },2000)

})

const getBiodata =(indexdata)=>{
    return new Promise((resolve,reject)=>{
        setTimeout((indexdata)=>{
            const biodata={
                name:"Vinod",
                age:20
            }
           resolve(`Roll no is${indexdata}. NAME IS ${biodata.name}.Age is ${biodata.age}.`)
    },2000, indexdata)
})
}

// obj.then((rollno)=>{
//     console.log(rollno)
//     return getBiodata(rollno[1])
// }).then((index)=>{
//     console.log(index)
// })
// .catch((error)=>{
//     console.log(error)
// })

async function getData(){
    try{
     const rollnodata = await obj
     console.log(rollnodata)

     const biodatas = await getBiodata(rollnodata[1])
     console.log(biodatas)
     return biodatas;
    }catch(error){
        console.log(error)
    }

}
const getname=getData().then((myname)=>{
    console.log(myname)
})
