const judgeVegetable =  function (vegetables, metrics){
  let x = vegetables.map((veg) => veg[metrics]);
  x.sort(function(a, b){
    return b - a;
  });
  
  for (let i = 0; i< vegetables.length; i++){
    //console.log(vegetables[i]);
    //console.log(vegetables[i]['submitter']);
    if (vegetables[i][metrics] === x[0]){
      let temp = vegetables[i]['submitter'];
      return temp;
    }
  }
  //console.log(temp);   
};                                   

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 22,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metrics = 'redness'

console.log(judgeVegetable(vegetables, metrics));