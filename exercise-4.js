var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];


function dataHandling2(input){
  input.splice(1, 4, "Roman Alamsyah Elsharawy","Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro");
  console.log(input); // splice
  var tanggal = input[3].split('/'); // untuk bulan dan sort
  var tanggal2= input[3].split('/'); // untuk join
  var bulan = tanggal[1];
  switch (bulan) {
    case '01': console.log('Januari');break;
    case '02': console.log('Februari');break;
    case '03': console.log('Maret');break;
    case '04': console.log('April');break;
    case '05': console.log('Mei');break;
    case '06': console.log('Juni');break;
    case '07': console.log('Juli');break;
    case '08': console.log('Agustus');break;
    case '09': console.log('September');break;
    case '10': console.log('Oktober');break;
    case '11': console.log('November');break;
    case '12': console.log('Desember');break;
    default: console.log('bulan tidak ada');break;
  };
  var sort = tanggal.sort(function(a, b){return b-a})
  console.log(sort);
  var join = tanggal2.join("-")
  console.log(join);
  console.log(input[1].slice(0,15));
  
}

// var arr = [1, 2, 15];
// arr.sort(function(a, b) { return b - a });
// console.log(arr); 
/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */


dataHandling2(input);