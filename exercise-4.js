//Tantangan Array 3 (Array Join, Split, Slice, Splice, Sort)
function dataHandling2(input){

  //Menggunakan fungsi splice untuk memodifikasi variabel
  input.splice(1,2,'Roman Alamsyah Elsharawy','Provinsi Bandar Lampung');  
  input.splice(4,1,'Pria', 'SMA Internasional Metro');  
  console.log('data setelah menggunakan fungsi splice: ', input);

  //mengambil angka bulan dan menampilkan nama bulan di console
  var tanggal = input.slice(3,4)
  var tanggalString = tanggal.toString()  
  var arr = tanggalString.split('/')
  var bulan = Number(arr[1])  
  switch (bulan){
    case 1: {console.log('Januari'); break;}
    case 2: {console.log('Februari'); break}
    case 3: {console.log('Maret'); break;}
    case 4: {console.log('April'); break;}
    case 5: {console.log('Mei'); break;}
    case 6: {console.log('Juni'); break;}
    case 7: {console.log('Juli'); break;}
    case 8: {console.log('Agustus'); break;}
    case 9: {console.log('September'); break;}
    case 10: {console.log('Oktober'); break;}
    case 11: {console.log('Nopember'); break;}
    case 12: {console.log('Desember'); break;}
  }

  //sorting tanggal/bulan/tahun secara desceding  
  console.log(arr.sort(function(value1, value2){return value2 - value1}));

  //menggabungkan elemen tanggal/bulan/tahun dengan pemisah strip (-)
  var data = tanggalString.split('/')  
  console.log(data.join('-'))
  
  //Menghapus kelebihan karakter (dibatasi sebanyak 15 karakter) dan menampilkan di console
  var nama = input[1]
  var namaString = nama.toString()  
  console.log(namaString.slice(0,14))  
}

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);