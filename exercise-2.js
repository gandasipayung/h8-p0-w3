function balikString(str) {
  var hasil =''
  for (var i=str.length -1 ; i >= 0 ; i --){
    hasil += str[i]
  }
  return hasil
}

// 
console.log(balikString('Nama Saya Ganda')); // adnaG ayaS amaN
console.log(balikString('Asal saya dari Medan')); // nadeM irad ayas lasA
console.log(balikString('Saya siswa di hacktiv8')); // 8vitkcah id awsis ayaS
console.log(balikString('Saya masih berada di phase 0')); // 0 esahp id adareb hisam ayaS
console.log(balikString('hello world!')); // !dlrow olleh