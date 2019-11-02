function tentukanDeretAritmatika(arr) {
  // you can only write your code here!
  var selisih = arr[1] - arr[0]
  for (var i = 0 ; i < arr.length ; i ++){
   if(arr[i+1] - arr[i] === selisih){
    console.log(` ${arr[i+1]} - ${arr[i]} = ${selisih} `);
    deret = true
   } else {
     deret = false
   }
   console.log(`hasil looping ke ${i} adalah ${deret}`);
  }
  return deret
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6, 20])); // true
// console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
// console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
// console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
// console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false