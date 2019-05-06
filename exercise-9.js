function checkAB(num) {
    // you can only write your code here!
    var kondisi = false;
    for(var x = 0; x < num.length; x++){
        if(num[x] === 'a'){
            var angkaHitung = Number(x);
            for(var u = x; u < num.length; u++){
                var angkaHitung2 = Number(u);
                if(num[u] === 'b'){
                    //console.log(angkaHitung + ' ini a')
                    //console.log(angkaHitung2 + ' ini b')
                    if(angkaHitung2 - angkaHitung === 3){
                        kondisi = true;
                        break;
                    }
                    else {
                        angkaHitung += 1;
                    }
                }
                else if(num[u] === ' '){
                    angkaHitung+= 1
                    // console.log(angkaHitung2)
                }
            }
            
        }
        else if(num[x] === 'b'){
            var angkaHitung = Number(x);
            for(var u = x; u < num.length; u++){
                var angkaHitung2 = Number(u);
                if(num[u] === 'a'){
                    //console.log(angkaHitung + ' ini b')
                    //console.log(angkaHitung2 + ' ini a')
                    if(angkaHitung2 - angkaHitung === 3){
                        kondisi = true;
                        break;
                    }
                    else {
                        angkaHitung += 1;
                    }
                }
                else if(num[u] === ' '){
                    angkaHitung+= 1
                    // console.log(angkaHitung2)
                }
            }
        }
        
    }
    return kondisi;
  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false
