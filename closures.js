const outerFun=(a)=>{
    let b=10;
    const innerFun=()=>{
        let sum=a+b;
        console.log(`Sum:${sum}`)
    }
    return innerFun
}
let x=outerFun(4)
x()