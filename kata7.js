const checkAir = function (samples, threshold){
  let count_dirt = 0;
  let count_clean = 0;
  let count_length=samples.length;
  for (var i=0; i<samples.length; i++){
    if (samples[i]=== 'dirty'){
      count_dirt += 1;
    }else{
      count_clean +=1;
    }

  }
  res = (count_dirt)/count_length;
  if( res >= threshold){
    return 'Polluted';
  }else{
    return 'Clean';
  }

};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))