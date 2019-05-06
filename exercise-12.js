function countProfit(shoppers) {
    let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                       ['Baju Zoro', 500000, 2],
                       ['Sweater Uniklooh', 175000, 1]
                     ];
  
    // you can only write your code here!
    if(shoppers.length < 1){
        return []
    }
    var hasil = []
    
    for(var x = 0; x < listBarang.length; x++){
        hasil.push({
            product : listBarang[x][0],
            shoppers : [],
            leftOver : listBarang[x][2],
            totalProfit : 0   
        })
    }

    for(var x = 0; x < shoppers.length; x++){
        for(var u = 0; u < hasil.length; u++){
            if(listBarang[u][2] < shoppers[x].amount ){
                break;
            }
            if(shoppers[x].product === hasil[u].product){
                //console.log(x)
                listBarang[u][2] -= shoppers[x].amount;
                if(listBarang[u][2] < 0){
                    break;
                }
                hasil[u].shoppers.push(shoppers[x].name);
                hasil[u].leftOver = listBarang[u][2]
                hasil[u].totalProfit += (listBarang[u][1] * shoppers[x].amount)
            }
        }
    }
    return hasil
}
  
  // TEST CASES
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
  //[ { product: 'Sepatu Stacattu',
  //   shoppers: [ 'Windi', 'Vanessa' ],
  //   leftOver: 5,
  //   totalProfit: 7500000 },
  // { product: 'Baju Zoro',
  //   shoppers: [],
  //   leftOver: 2,
  //   totalProfit: 0 },
  // { product: 'Sweater Uniklooh',
  //   shoppers: [],
  //   leftOver: 1,
  //   totalProfit: 0 } ]
  
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [ 'Windi' ],
  //     leftOver: 2,
  //     totalProfit: 12000000 },
  //   { product: 'Baju Zoro',
  //     shoppers: [ 'Devi', 'Lisa' ],
  //     leftOver: 0,
  //     totalProfit: 1000000 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [ 'Rani' ],
  //     leftOver: 0,
  //     totalProfit: 175000 } ]
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [],
  //     leftOver: 10,
  //     totalProfit: 0 },
  //   { product: 'Baju Zoro',
  //     shoppers: [],
  //     leftOver: 2,
  //     totalProfit: 0 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [],
  //     leftOver: 1,
  //     totalProfit: 0 } ]
  console.log(countProfit([])); //[]

var shoppers = 
            [
                {name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, 
                {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, 
                {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}
            ]
    let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                       ['Baju Zoro', 500000, 2],
                       ['Sweater Uniklooh', 175000, 1]
                     ];
  
    // you can only write your code here!
    var hasil = []
    var stockSepactuStc = 0,
        stockBajuZoro = 0,
        stockUnik = 0;
    ;
    for(var x = 0; x < listBarang.length; x++){
        hasil.push({
            product : listBarang[x][0],
            shoppers : [],
            leftOver : 0,
            totalProfit : 0   
        })
    }

    for(var x = 0; x < shoppers.length; x++){
        for(var u = 0; u < hasil.length; u++){
            if(listBarang[u][2] < shoppers[x].amount ){
                break;
            }
            if(shoppers[x].product === hasil[u].product){
                //console.log(x)
                listBarang[u][2] -= shoppers[x].amount;
                if(listBarang[u][2] === 0){
                    break;
                }
                hasil[u].shoppers.push(shoppers[x].name);
                hasil[u].leftOver = listBarang[u][2]
                hasil[u].totalProfit += (listBarang[u][1] * shoppers[x].amount)
            }
        }
    }

    //console.log(hasil)

    //[ { product: 'Sepatu Stacattu',
//   //   shoppers: [ 'Windi', 'Vanessa' ],
//   //   leftOver: 5,
//   //   totalProfit: 7500000 },
//   // { product: 'Baju Zoro',
//   //   shoppers: [],
//   //   leftOver: 2,
//   //   totalProfit: 0 },
//   // { product: 'Sweater Uniklooh',
//   //   shoppers: [],
//   //   leftOver: 1,
//   //   totalProfit: 0 } ]