function pasanganTerbesar(num) {
  // you can only write your code here!
  // var pAngka = [];
  // var numStr = num.toString();
  // for (var i = 0; i < numStr.length - 1; i++) {
  //  var pair = numStr[i] + numStr[i+1];
  //  var pairNumber = Number(pair);
  //  pAngka.push(pairNumber);
  // }
  // pAngka.sort();
  // var pasanganTerbesar = pAngka[pAngka.length-1];
  // return pasanganTerbesar;
  var hasil = [];
  var angkaStr = num.toString(); // merubah parameter dari number ke string agar bisa di akses indeksnya
  for (var i = 0 ; i < angkaStr.length-1 ; i ++ ){
    var pasangan = angkaStr[i] + angkaStr[i+1]; // berdasar indeks akan di dapat pasangan tapi masih berbentuk string
    var angka = Number(pasangan); // pasangan yang masih berbentuk string di ubah ke number
    hasil.push(angka);
  }
  // console.log(hasil);
  var max = hasil[0]; // dengan asumsi dari pasangan di atas tidak ada yang nilainya minus
  // var min = hasil[0]; // dengan asumsi dari pasangan di atas tidak ada yang nilainya minus
  for(var i = 0 ; i < hasil.length ; i++){
    if(hasil[i] > max){
      max = hasil[i]; // jika indeks hasil lebih besar dari nilai max maka max akan di re-assign dengan hasil indeks ke i
    } //else{
      // if (hasil[i] < min){
      // min = hasil[i]; // 
      // }
    //}
    // console.log(max);
  }
  // return `nilai pasangan terbesar adalah ${max}, nilai pasangan terkecil adalah ${min}`  
 return max 
}


// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
// console.log(pasanganTerbesar(12783456)); // 83
// console.log(pasanganTerbesar(910233)); // 91
// console.log(pasanganTerbesar(71856421)); // 85
// console.log(pasanganTerbesar(79918293)); // 99