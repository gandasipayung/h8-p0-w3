function targetTerdekat(arr) {
  // you can only write your code here!
  var posisiO = []; // posisi o
  var posisi1 = []; // posisi x
 //  var tampung = []; // 
  var jarak = [];
  var hasil =0;
  for(var i = 0 ; i < arr.length ; i++){
    if(arr[i] === 'o'){
      posisiO.push(i);
    }else if(arr[i] === 'x'){
      posisi1.push(i)
    }
  } 

  for (var i= 0 ; i < posisiO.length; i++){
   for( var j=0 ; j < posisi1.length ; j++){
     hasil = posisiO[i]-posisi1[j];
     jarak.push(Math.abs(hasil));
   }   
 }
 jarak.sort();
 if (jarak[0] === undefined){
   return 0
 }
 return jarak[0];
}


// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2