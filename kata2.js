const conditionalSum = function(values, condition) {
  // Your code here
  let evensum=[]
  let oddsum = []
  let evensumtotal  = 0;
  let oddsumtotal = 0;
  for (const val of values){
    //console.log(val);
    
    if (val % 2 === 0){
      evensum.push(val);
    }else {
      oddsum.push(val);
    }
  }
  //console.log(evensum);
  //console.log(oddsum);
  if (condition === 'even'){
    for(let i=0; i<evensum.length; i++){
      evensumtotal +=  evensum[i];
    }
    //console.log(evensumtotal);
    return evensumtotal;
    
  }else{
    for(let i=0; i<oddsum.length; i++){
      oddsumtotal  +=  oddsum[i];
    }
    //console.log(oddsumtotal);
    return oddsumtotal;
  }

};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));