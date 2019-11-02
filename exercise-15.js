function groupAnimals(animals) {
  // you can only write your code here!
  var hasil = [];
  var arr1 = [];
  animals.sort();
  var hurufAwal = animals[0][0];
  for(var i = 0 ; i < animals.length ; i++){
    // hurufAwal = animals[i][0]
    if(animals[i][0]=== hurufAwal){
      arr1.push(animals[i]);
    } else {
      hasil.push(arr1);
      arr1 = [];
      hurufAwal = animals[i][0];
      arr1.push(animals[i])
    }
  }
  hasil.push(arr1)
  return hasil
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
[ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
[ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]