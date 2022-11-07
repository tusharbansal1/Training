const getRollNo=()=>{
    setTimeout(()=>{
        console.log("getting roll no.")
        let roll_no=[1,2,3,4,5]
        console.log(roll_no)
        setTimeout((rollno)=>{
            const biodata={
                name:"Vinod",
                age:20
            }
            console.log(`Roll no is ${rollno} Name is ${biodata.name} and age is ${biodata.age}`)
            setTimeout((name)=>{
         biodata.gender="Male"
     console.log(`Roll no is ${rollno} Name is ${biodata.name} and age is ${biodata.age} and Gender is ${biodata.gender}`)
             
            },2000,biodata.name)
        },2000,roll_no[1])

    },2000)
}
getRollNo();