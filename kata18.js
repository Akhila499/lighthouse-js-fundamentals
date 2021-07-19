const squareCode = function(message) {
  
  let msg = message.replaceAll(' ','');
  let len= msg.length;
  let ceilSqrt =Math.ceil(Math.sqrt(len));
  //console.log(ceilSqrt);
  let chunckSize = ceilSqrt;
  let chunck = [];
  let oneLetterEach=[];

  while(msg){
    if (msg.length< chunckSize){
      chunck.push(msg);
      break;
    }else{
      chunck.push(msg.substr(0, chunckSize));
      msg = msg.substr(chunckSize);
    }
  }
  let temp={};
  
  for(let str of chunck){
    for (let index in str){
      if(index in temp){
        temp[index]= temp[index].concat(str[index]);
      }else{
        temp[index]=str[index];
      }
      
    }
  }
  
  let out = '';
  for(let val in temp){
    out += temp[val] + ' ';
  }
  //console.log(out);
  return out;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));