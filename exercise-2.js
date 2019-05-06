function fpb(angka1, angka2) {
    // you can only write your code here!
    var temp = [];
    var temp2 = []

    for(var x = 1; x <= angka1; x++){
        if(angka1 % x === 0 ){
            temp.push(x)
        }
    } // mencari di angka1

    for(var u = 1 ;  u <= angka2; u++){
        if(angka2 % u === 0){
            temp.push(u)        
        }
    } // mencari di angka2

    for(var i = 0 ; i < temp.length;i++){
        for(var t = i +1; t < temp.length; t++){
            if(temp[i]  === temp[t] ){
                temp2.push(temp[i])
            }
        }
    } // mencari angka yang sama
    var tampung;
    for(var i = 0 ; i < temp2.length;i++){
        for(var t = i +1; t < temp2.length; t++){
            if(temp2[i]  < temp2[t] ){
            tampung = temp2[i]
            temp2[i] = temp2[t]
            temp2[t] = tampung  
            }
        }
    } // memfilter dari yang terbesar di depan
    return temp2[0]
  }
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1
  console.log(fpb(48,60))

// var angka1 = 24; 
// var angka2 = 36;
// var temp = [];
// var temp2 = []

// for(var x = 1; x <= angka1; x++){
//     if(angka1 % x === 0 ){
//         temp.push(x)
//     }
// }

// for(var u = 1 ;  u <= angka2; u++){
//     if(angka2 % u === 0){
//         temp.push(u)        
//     }
// }

// for(var i = 0 ; i < temp.length;i++){
//     for(var t = i +1; t < temp.length; t++){
//         if(temp[i]  === temp[t] ){
//             temp2.push(temp[i])
//         }
//     }
// }
// var tampung;
// for(var i = 0 ; i < temp2.length;i++){
//     for(var t = i +1; t < temp2.length; t++){
//         if(temp2[i]  < temp2[t] ){
//           tampung = temp2[i]
//           temp2[i] = temp2[t]
//           temp2[t] = tampung  
//         }
//     }
// }

// console.log(temp)
// console.log(temp2)
// console.log(temp2[0])