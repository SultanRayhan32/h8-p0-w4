function digitPerkalianMinimum(angka) {
    // you can only write your code here!'
    
    var temp = []
    for(var x = 1; x <= angka;x++){
        if(angka % x === 0){
            temp.push(x)
        }
    }
    var tengah1 = []
    var tengah2 = []
    // for(var x = 0; x < temp.length; x++){
        
    //     if(x > 0 && x < (temp.length -1) / 2)
    // }
    
    var bagi = Math.floor( (temp.length -1) / 2)
    for(var x = 0; x <= bagi; x ++ ){
        tengah1.push(temp[x])
    }
    for(var u = bagi + 1; u < temp.length; u ++ ){
        tengah2.push(temp[u])
        
    }
    if(angka === 1){
        return 2
    }
    var hasil = '';
    hasil += tengah1[tengah1.length -1] + '' + tengah2[0]
    return hasil.length   
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2
  //console.log(digitPerkalianMinimum(9))
  //console.log(digitPerkalianMinimum(6))
  // 9 * 10 || 6 * 15 || 5 * 18 || 3 * 30 || 2 * 45 || 1 * 90 //3
  // 1 * 20 || 2 * 10 || 4 * 5 //2
  // 
//   var angka = 1  
//   var temp = []
//     for(var x = 1; x <= angka;x++){
//         if(angka % x === 0){
//             temp.push(x)
//         }
//     }
//     var tengah1 = []
//     var tengah2 = []
//     // for(var x = 0; x < temp.length; x++){
        
//     //     if(x > 0 && x < (temp.length -1) / 2)
//     // }
    
//     var bagi = Math.floor( (temp.length -1) / 2)
//     for(var x = 0; x <= bagi; x ++ ){
//         tengah1.push(temp[x])
//     }
//     for(var u = bagi + 1; u < temp.length; u ++ ){
//         tengah2.push(temp[u])
        
//     }
//     var hasil = ''
//     console.log(tengah1)
//     console.log(tengah2)
//     hasil += tengah1[tengah1.length -1] + '' + tengah2[0]
//     // console.log(hasil.length)
//     // console.log(bagi)
//     // console.log(temp)
//     // console.log(tengah1)
//     // console.log(temp[5])
//     // console.log(tengah2)