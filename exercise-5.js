function palindrome(kata) {
  // you can only write your code here!
  var kebalikan = '';
  for (var i=kata.length-1 ; i >=0 ; i--){
    kebalikan += kata[i]
  }
  return kata === kebalikan
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
