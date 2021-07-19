const numberOfVowels = function(data) {
  //console.log(res);
  let count = 0;
  for (const char of data){
    //console.log(char);
    if (char === 'a' || char === "e" || char === "i" || char === "o" || char === "u"){
      count += 1;
    }
  }
  return count;
  
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
console.log(numberOfVowels("akhila"));

