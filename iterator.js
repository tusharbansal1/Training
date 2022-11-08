const arr=["Apple","Mango","Banana","Bhindi"]
console.log("me array is",arr)

function fruitsIterator(values){
    var nextIndex=0;
    return{
        next: function(){
            if(nextIndex<values.length){
                return{
                value: values[nextIndex++],
                done:false }
            }
            else{
                return
              {  done:true
            }
        }
    }
}}
const fruits=fruitsIterator(arr)
console.log(fruits.next().value)
console.log(fruits.next().value)

