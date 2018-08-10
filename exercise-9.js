/*Diberikan sebuah function cariMean(arr) yang menerima sebuah array angka.
Function akan me-return mean dari array atau deret angka tersebut.
Mean adalah angka rata-rata dari deret bilangan tersebut.
Contoh, mean atau rata-rata dari [1, 2, 3, 4, 5] adalah 3.
Kita perlu kemudian melakukan pembulatan angka dari hasil mean yang didapatkan.*/

//exercise-9 --cari mean
function cariMean(arr) {
  // you can only write your code here!
  var jumlah = 0
  
	  for (i = 0; i < arr.length; i++){ 
	  	jumlah += arr[i]	  	
	  	var mean = Math.round(jumlah/arr.length)
	  }
  return mean
}

// TEST CASES
console.log(cariMean([1, 2, 3, 4, 5])); // 3
console.log(cariMean([3, 5, 7, 5, 3])); // 5
console.log(cariMean([6, 5, 4, 7, 3])); // 5
console.log(cariMean([1, 3, 3])); // 2
console.log(cariMean([7, 7, 7, 7, 7])); // 7