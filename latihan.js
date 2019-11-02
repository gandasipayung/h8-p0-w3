// // function angkaPalindrome(num) {
// //   // you can only write your code here!
  
// //   var hasil = false;
// //   while (hasil === false){
// //     var str = `${num}`
// //     var kebalikan = '';
// //     for (i=str.length-1 ; i >=0 ; i--){
// //     kebalikan += str[i]
// //     poli = str === kebalikan
// //     if (poli === true){
// //       num += 1
// //       hasil = true
// //     } else{
// //       hasil = false
// //     }
// //   }
// //   }
// //   return num
// //   // var str = `${num}`
// //   // var kebalikan = '';
// //   // for (i=str.length-1 ; i >=0 ; i--){
// //   //   kebalikan += str[i]
// //   //   poli = str === kebalikan
// //   // }
// //   // return poli






// // }

// // // TEST CASES
// // console.log(angkaPalindrome(8)); // 9
// // console.log(angkaPalindrome(10)); // 11
// // console.log(angkaPalindrome(117)); // 121
// // console.log(angkaPalindrome(175)); // 181
// // console.log(angkaPalindrome(1000)); // 1001



// // var sky = [0,3,4,5,6,7,8,9,10,11,12,14,16,17]; 
// // var ter = [];
// // for (j = 0; j < sky.length; j++) {
// //   if (j !== 0 || j !== sky.length){
// //     ter.push(sky[j]-sky[0]);
// //   }
// //   console.log(ter);
// // }

//  // dengan asumsi dari pasangan di atas tidak ada yang nilainya minus
// //-------------------------------------------------------------//
// //  Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.

// //  Code
//  function targetTerdekat(arr) {
//    // you can only write your code here!
//    var posisiO = []; // posisi o
//    var posisi1 = []; // posisi x
//   //  var tampung = []; // 
//    var jarak = [];
//    var hasil =0;
//    for(var i = 0 ; i < arr.length ; i++){
//      if(arr[i] === 'o'){
//        posisiO.push(i);
//      }else if(arr[i] === 'x'){
//        posisi1.push(i)
//      }
//    }
//   //  tampung.push(posisiO , posisi1)
//   //  console.log(tampung);
//   //  console.log(posisiO);
//   //  console.log(posisi1);
   
//   //  console.log(`o : ${posisiO}     x : ${posisi1}`);
//    for (var i= 0 ; i < posisiO.length; i++){
//     for( var j=0 ; j < posisi1.length ; j++){
//       hasil = posisiO[i]-posisi1[j];
//       // console.log(posisi0[i]);
//       // console.log(posisi1[j]);
//       // console.log(hasil);
//       jarak.push(Math.abs(hasil));
//     }   
//   }
//   jarak.sort();
//   if (jarak[0] === undefined){
//     return 0
//   }
//   return jarak[0];
// }

 
//  // TEST CASES
//  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
//  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
//  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
//  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
//  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2

// function groupAnimals(animals) {
//   // you can only write your code here!
//   var hasil = [];
//   var arr1 = [];
//   animals.sort();
//   var hurufAwal = animals[0][0];
//   for(var i = 0 ; i < animals.length ; i++){
//     // hurufAwal = animals[i][0]
//     if(animals[i][0]=== hurufAwal){
//       arr1.push(animals[i]);
//     } else {
//       hasil.push(arr1);
//       arr1 = [];
//       hurufAwal = animals[i][0];
//       arr1.push(animals[i])
//     }
//   }
//   hasil.push(arr1)
//   return hasil
// }

// // TEST CASES
// console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
// console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]