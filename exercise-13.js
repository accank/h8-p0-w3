function targetTerdekat(arr) {
  var arro = arr.indexOf("o")
  var arrx = arr.indexOf("x")
  if (arrx === -1) {    
    return 0
  }
  
  var panjangox = arr.length
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "x") {
      
      var jarakox = Math.abs(i - arro)
            
      if (jarakox < panjangox) {
        panjangox = jarakox
        
      }
    }
  }  
  return panjangox  
}

// TEST CASES
console.log(targetTerdekat(['', '', 'o', '', '', 'x', '', 'x'])); // 3
console.log(targetTerdekat(['o', '', '', '', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', '', '', '', 'x', 'x', 'o', ''])); // 1
console.log(targetTerdekat(['', '', 'o', ''])); // 0
console.log(targetTerdekat(['', 'o', '', 'x', 'x', '', '', 'x'])); // 2