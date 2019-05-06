function changeMe(arr) {
    // you can only write your code here!
    
    
    if(arr.length === 0){
        console.log('')
    }
    else{
        
        for(var x = 0;  x< arr.length; x++){
            var nama =[{
                firstName : arr[x][0] ,
                lastName : arr[x][1] ,
                gender : arr[x][2],
                age : arr[x][3]
            }]
            var nama2 = arr[x][0] + ' ' + arr[x][1]
            console.log(`${x + 1}. ${arr[x][0]} ${arr[x][1]}:`)
            console.log( {
                firstName : arr[x][0] ,
                lastName : arr[x][1] ,
                gender : arr[x][2],
                age : arr[x][3]
            })
        }
        
    }
  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
  // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""