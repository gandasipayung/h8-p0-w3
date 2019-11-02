function angkaPalindrome(num) {
  // you can only write your code here!
  var ulang = true;
  while (ulang){  
    num += 1
    // console.log(num);
    // console.log(num + 1);
    
    var numStr = num.toString()
    var kebalikan = numStr.split('').reverse().join(''); 
    if (numStr === kebalikan){
      ulang = false 
    } else{
      ulang = true
    }
  }
  return num
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001