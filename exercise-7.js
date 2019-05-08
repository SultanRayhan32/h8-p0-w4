function urutkanAbjad(str) {
    // you can only write your code here!
    var temp  = []
    for(var x = 0; x < str.length; x++){
        temp.push(str[x])
    }
    var temp222 = ''
    for(var x = 0; x < temp.length; x++){
        for(var u = x + 1; u < temp.length; u++ ){
            if(temp[x] > temp[u]){
                temp222 = temp[x]
                temp[x] =  temp[u]
                temp[u] = temp222
            }
        }
    }
    var hasil = ''
    for(var x = 0; x < temp.length; x++){
        hasil += temp[x]
    }
    return hasil
  }
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'
