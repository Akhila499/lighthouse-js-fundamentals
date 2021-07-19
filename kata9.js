const camelCase = function(input) {
  // Your code here
  let str_split=input.split(" ");
  //console.log(str_split);
  for(let i=0; i<str_split.length; i++){
    if(i===0){
      continue;
    }else{
      //console.log(str_split[i]);
      str_split[i] = str_split[i].charAt(0).toUpperCase() + str_split[i].slice(1);
      
    }
    
  }
  //console.log(str_split);
  str_split = str_split.join("");
  //console.log(str_split);
  return str_split;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));