// function angkaPrima(angka) {
// }
  
//   // TEST CASES
//   console.log(angkaPrima(3)); // true
//   console.log(angkaPrima(7)); // true
//   console.log(angkaPrima(6)); // false
//   console.log(angkaPrima(23)); // true
//   console.log(angkaPrima(33)); // false
var angka = 997
var prima = true;
var temp;
for(var x = 2 ;  x < angka -1; x++){
    temp = angka % x
    console.log(x)
    if(temp === 0){
        prima = false
        break
    }
}

if(prima === true && angka > 0 && angka !== 1){
    console.log('adalah bilangan prima')
}

else{
    console.log('bukan bilangan prima')
}

// console.log(9 % 3)