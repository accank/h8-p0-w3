//exercise-5 --- palindrome
function palindrome(kata) {
	var tampung = ''
	for (i = 0; i < kata.length; i++){
		tampung += kata[i]
	}
	

	var tampung1 = ''
	for (j = kata.length - 1; j >= 0; j--){
		tampung1 += kata[j]
	}
	
	if(tampung === tampung1){
		return true
	} else {
		return false
	}
}
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
