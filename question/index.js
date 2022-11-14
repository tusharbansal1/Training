//find if 'section' is present in an array or not?
const array=['header','section','aside','footer']
const value='section'
console.log(array.includes(value))

// check if both string are anagram of each other.
function checkAnagram(str1,str2){
    var len1=str1.length
    var len2=str2.length
    if(len1!=len2){
        console.log("invalid")
        return
    }
let a=str1.split('').sort().join('')
let b=str2.split('').sort().join('')
if(a===b){
    console.log("true")
}
else{
    console.log("false")
}
}

checkAnagram('lemon','melon')

//output
let newObj = {}
const newArr = [
{'id': 1, 'name': 'Saransh'},
{'id': 2, 'name': 'Milan'}]
for(var i in newArr){
newObj[newArr[i].id] = newArr[i].name;
}

//find keys in array
const object1 = {
    a: 'somestring',
    b: 42,
    c: false
    };
    const key=Object.keys(object1)
    let text=""
    for(let x of key){
        text+= x 
    }
    console.log(text)