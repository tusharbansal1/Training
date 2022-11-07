const obj={
    name:"Tushar",
    sname:"Bansal",
    
    }
    const obj1={
        name:"Tushar1",
        sname:"Bansal1",
        
        }
        const obj2={
            name:"Tushar2",
            sname:"Bansal2",
             
            }
function feature(){
    console.log(`name is ${this.name} and sir name is ${this.sname}.`)
}

let you1=feature.bind(obj)
you1() 


let you3=feature.bind(obj2)
you3()