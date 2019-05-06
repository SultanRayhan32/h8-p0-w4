function ubahHuruf(kata) {
    // you can only write your code here!
    var abc = 'abcdefghijklnopqrstuvwxyz';
    var temp = ''
    for(var x = 0; x < kata.length; x++){
        for(var u = 0; u <abc.length; u++){
            if(kata[x] === abc[u] ){
                temp+= abc[u+1]
            }
        }
    }
    return temp
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu

