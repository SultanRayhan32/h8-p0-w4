function cariMedian(arr) {
    // you can only write your code here!
    var temp1 = []
    var temp2 = []
    if(arr.length % 2 === 0){ //jika genap
        var bagiTes = arr.length / 2
        for(var x = 0; x < bagiTes; x++ ){
            temp1.push(arr[x])
        }

        for(var u = arr.length -1; u >= bagiTes; u--){
            temp2.push(arr[u])
        }
        var hasil = (temp1[temp1.length-1] + temp2[temp2.length-1]) / 2
        return hasil
    }
    else{ // jika ganjil
        var angkaHasilBagi = arr.length / 2;
        var hasil =  Math.floor(angkaHasilBagi)
        return arr[hasil]
        
    }
    
  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5