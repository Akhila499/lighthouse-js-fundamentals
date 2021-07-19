const sumLargestNumbers = function(data) {
  // Put your solution here
  let flag=1;
  let temp;
  while(flag){
    flag=0;
    for(i=0; i<=data.length; i++){
      if (data[i]<data[i+1]){
        temp=data[i];
        data[i]= data[i+1];
        data[i+1]=temp;
        flag=1;
      }
    }
    console.log(data);
    
  }
  return(data[0]+data[1]);
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));