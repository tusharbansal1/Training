const p1=(fr,callfr)=>{
    console.log(`'hey i am talking to ${fr},call me later`)
    callfr();
}
const p2=()=>{
    console.log(`hello! call me later dekha`)
}
p1("abc",p2)