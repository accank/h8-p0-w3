//Mengakses nilai dalam array
function balikString(kata){
  var balikKata = '';
  for(i = kata.length-1; i >= 0; i--){
    balikKata += kata[i];
  }
  return balikKata; 
}
console.log(balikString('hello world!'));