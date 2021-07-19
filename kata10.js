const multiplicationTable = function(maxValue){
  let res = '';
  for(var i=1; i<=maxValue; i++){
    for(var j=1; j<=maxValue; j++){
      res = res.concat(i*j);
      res += ' ';
    }
    res = res+'\n';
  }
  //console.log(res);
  return res;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));