function highestScore (students) {
    // Code disini
    var tempNilai = {};

    for(var x = 0; x < students.length; x++){
      if(tempNilai[students[x].class] === undefined){
        tempNilai[students[x].class] = []
      }
      tempNilai[students[x].class].push(students[x].score)
    }
    var temp = []
    var temp  = ''
    for(var x in tempNilai){
       for(var u = 0; u < tempNilai[x].length; u++ ){
         for(var i = u +1; i < tempNilai[x].length; i++){
           if(tempNilai[x][u] < tempNilai[x][i] ){
            temp = tempNilai[x][u]
            tempNilai[x][u] =tempNilai[x][i]
            tempNilai[x][i] = temp
           }
         }
       }
    }

    for(var x = 0; x < students.length; x++){
      for(var u in tempNilai){
        if(students[x].score === tempNilai[u][0]){
          tempNilai[u] = { name : students[x].name ,  score : students[x].score }
        }
      }
    }
    return tempNilai
  }
  
  // TEST CASE
  console.log(highestScore([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  // {
  //   foxes: { name: 'Dimitri', score: 90 },
  //   wolves: { name: 'Alexei', score: 85 }
  // }
  
  
  console.log(highestScore([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
  
  // {
  //   foxes: { name: 'Alexander', score: 100 },
  //   wolves: { name: 'Alisa', score: 76 },
  //   tigers: { name: 'Viktor', score: 80 }
  // }
  
  
  console.log(highestScore([])); //{}
