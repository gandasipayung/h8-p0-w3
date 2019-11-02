function hitungJumlahKata(kalimat) {
  // you can only write your code here!
  // var split = kalimat.split(" ")
  // // return split
  // var jumlah = split.length
  // return jumlah
  var penampungArr = [];
  var penampungKata = '';
  for (var i = 0 ; i < kalimat.length ; i ++){
    // Jika indeks di kalimat tidak sama dengan spasi maka penampung kata di tambah indeks kalimat ke i
    if (kalimat[i]!==' '){
      penampungKata += kalimat[i]
    }
    // Jika kalimat indeks ke i sama dengan 'spasi' maka penampung kata di push ke penampung arr kemudian penampung kata di reset
    if (kalimat[i] == ' ' || i === kalimat.length-1){
      penampungArr.push(penampungKata);
      penampungKata = '';
    } 
  }
  return penampungArr.length
}
  

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5