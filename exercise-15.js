function groupAnimals(animals) {
  animals.sort();
  var klpAnimals = [];
  var hurufAwal = animals[0][0];
  
  var kategori = [];
  for (var i = 0; i < animals.length; i++) {
    if (animals[i][0] === hurufAwal) {
      kategori.push(animals[i]);
    } else {
      klpAnimals.push(kategori);
      kategori = [];
      hurufAwal = animals[i][0];
      kategori.push(animals[i]);
    }
    if (i === animals.length-1) {
      klpAnimals.push(kategori);
    }
  }
  return klpAnimals;
}


// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]