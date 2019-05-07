function shoppingTime(memberId, money) {
    // you can only write your code here!
    var produk = 
    [
        {nama : 'Sepatu Stacattu' , harga : 1500000 },
        {nama : 'Baju Zoro' , harga : 500000 },
        {nama : 'Baju H&N', harga : 250000},
        {nama : 'Sweater Uniklooh' , harga : 175000 },
        {nama : 'Casing Handphone' , harga : 50000 },
    ]
    if(memberId === ''  || memberId ===  undefined){
        return 'Mohon maaf, toko X hanya berlaku untuk member saja'
    }
    else if(money  < produk[produk.length -1].harga){
        return 'Mohon maaf, uang tidak cukup'
    }
    
    var hasil = {
        memberId : memberId,
        money : money,
        listPurchased : [],
        changeMoney : 0
    }
    
    for(var x = 0; x < produk.length; x++){
        // if(money < produk[x].harga){

        // }
        if(money >= produk[x].harga){
            hasil.listPurchased.push(produk[x].nama)
            money -= produk[x].harga
            hasil.changeMoney = money
        }
    }
    return hasil
  }
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja


//   Sepatu brand Stacattu seharga 1500.000
//   Baju brand Zoro seharga 500.000
//   Baju brand H&N seharga 250.000
//   Sweater brand Uniklooh seharga 175.000
//   Casing Handphone seharga 50.000
