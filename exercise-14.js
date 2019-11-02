function mengelompokkanAngka(arr) {
  // you can only write your code here!
  var hasil = [];
  var genap = [];
  var ganjil = [];
  var kelipatan3 = [];
  for (var i = 0 ; i < arr.length  ; i++){
    if (arr[i]%3 === 0){
      kelipatan3.push(arr[i]);
      // console.log(`${arr[i]} adalah kelipatan 3 maka di push ke penampung kelipatan3`);
    } else if(arr[i]%2===0) {
      genap.push(arr[i]);
      // console.log(`${arr[i]} adalah genap maka di push ke penampung genap`);
    }else{
      ganjil.push(arr[i]);
      // console.log(`${arr[i]} adalah angka yang bukan kelipatan 3 dan bukan genap maka dimasukkan ke penampung ganjil`);
    }
  }
  hasil.push(genap);
  hasil.push(ganjil);
  hasil.push(kelipatan3);

  return hasil
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]