const name="tushar"
//name="bansal"      error because can not change value of constant variable
console.log(name)

function f() {
    if(true){
    let b = 9
    
    }
    //console.log(b)  error beacuse outside block
}
f();

function fc() {
    if(true){
    var a = 10;
    
    }
    console.log(a)  //10
}
fc();

var c="Tushar"

function fb() {
    if(true){
    var c="Bansal" 
    console.log(c) //Bansal
    
    }
    console.log(c) //Bansal
}
fb();

let m="Tushar"

function ff() {
    if(true){
    let m="Bansal" 
    console.log(m) //Bansal
    
    }
    console.log(m) //tushar
}
ff();