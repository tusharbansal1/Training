// let a=[1,1,2,3,4,5]

// const b=new Set(a);
// console.log(b)

const arr1 = [1, 3, 4, 1, 0, 2, 5, 7, 9, 2];

function findDuplicates(array) {
  const unique = [];
  array.sort();
  if (array.length > 1) {
    let i = 0;
    let j = 1;
    for (let index = 0; j < array.length; index++) {
      const first = array[i];
      const second = array[j];
      console.log(first + "--" + second);
      if (first !== second) {
      unique.push(first);
      }
      i++;
      j++;
    }
 return unique;
  } else {
  console.log("array Does not have any duplicate");
  }
}
const ans = findDuplicates(arr1);
console.log(ans);
