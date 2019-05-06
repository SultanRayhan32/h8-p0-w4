function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    
    
    var ruteawal = [];
    var ruteKedua = [];
    var hasilnya = []
   for(var x = 0; x < arrPenumpang.length;x++){
        // rutePertama.push({
        //     penumpang : arrPenumpang[x][0] , naikDari : arrPenumpang[x][1] , tujuan : arrPenumpang[x][2] , bayar : ''
        // })
        
        for(var u = 0; u < rute.length; u++){
            if(rute[u] === arrPenumpang[x][1]){
                ruteawal.push(u)
            }
            else if(rute[u]=== arrPenumpang[x][2]){
                ruteKedua.push(u)
            }
        }
    }

    for(var x = 0 ; x < arrPenumpang.length; x++){
        var hasil = (ruteKedua[x] - ruteawal[x]) * 2000
        hasilnya.push({
            penumpang : arrPenumpang[x][0] , naikDari : arrPenumpang[x][1] , tujuan : arrPenumpang[x][2] , bayar : hasil
         })
         hasil = 0;
    }
    return hasilnya
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]
