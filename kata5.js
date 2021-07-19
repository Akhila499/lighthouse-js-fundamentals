const urlEncode =  function(text){
  text = text.trim();
  var newstr = text.replaceAll(' ', '%20' );
  return newstr;
  
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));