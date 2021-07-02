const range =  function (start, end, step){
  let final = [];
  if (((start && end && step) != undefined ) && (start < end) && (step > 0)){
    for ( let temp = start ; temp <= end ; temp+step  ){
      final.push(temp);  
      temp += step;
    }
    return final;
  }else{
    return final;
  }
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range());

