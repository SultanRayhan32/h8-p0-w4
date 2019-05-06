function cariModus(arr) {
    // you can only write your code here!
    var temp = [];
    for(var x = 0; x < arr.length; x++){
        for(var y = x + 1; y < arr.length; y++){
            if(arr[x] === arr[y]){
                temp.push(arr[x])
            }
        }
    }
    var booelam32 = true;
    for(var x = 0; x < temp.length; x++){
        for(var y = x + 1; y < temp.length; y++){
            if(temp[x] === temp[y]){
                booelam32 = false;
            }
        }
    }
    
    if(temp.length < 1){
        return -1
    }
    // else if(temp.length === arr.length || temp.length > arr.length || booelam32 === false){
    else if(booelam32 === false){
        return -1
    }
    else{
        return temp[0] 
    }
  }
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1
  