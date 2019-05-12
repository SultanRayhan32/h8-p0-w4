function tukarBesarKecil(kalimat) {
    // you can only write your code here!
    var besar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var kecil = 'abcdefghijklmnopqrstuvwxyz';
    var arr = [];
    for(var x = 0; x < kalimat.length; x++){
      arr.push(kalimat[x])
    }
    var hasil = ''
    for(var x = 0; x < arr.length; x++){
      for(var u = 0; u < besar.length; u++){
        if(arr[x] === besar[u]){
          arr[x] = kecil[u]
        }
        else if(arr[x] === kecil[u]){
          arr[x] = besar[u]
        }
      }
      hasil += arr[x]
    }
    
    return hasil
    
  }
  
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"


//   for(var x = 0; x < kalimat.length; x++){
//     if(kalimat[x] === ' '){
//         // temp2.push(x)
//         angka = x;
//     }
//     for(var u = 0; u < alphabet.length; u++){
        
//         if(kalimat[x] === alphabet[u]){
//             temp += alphabet2[u]
            
//         }
//         else if(kalimat[x] === alphabet2[u]){
//             temp += alphabet[u]
            
//         }
//         else if(x === angka){
//             temp += ' '
//             angka = -1;
//         }
//         else if( kalimat[x] !== alphabet[u] || kalimat[x] !== alphabet2[u]) {
//             temp += kalimat[x]
//         }
        
//     }
    
// }
