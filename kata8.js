const repeatNumbers = function(data) {
  // Put your solution here
  let val = 0;
  let multiple =0;
  let temp='';
  for(i=0; i<data.length; i++){
    
    for(j=0; j<data[i].length; j++){
      if(j===0){
        val = data[i][j];
      }else if(j===1){
        multiple = data[i][j];
      }
    }
    if (temp!=''){
      temp=temp.concat(',');
    }
    new_val=val.toString();
    for(let i=0; i<multiple; i++){
      temp=temp.concat(new_val);
    }
   
    
  }
  return temp;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));