const urlDecode = function(text){
  let sepText;
  if(text.includes('&')){
    sepText=text.split('&');
  }
  else{
    sepText=text;
  }
  
  if (typeof sepText === 'string'){
    if(sepText.includes('=')){
      sepText=sepText.split('=');
    }
  }else if(typeof sepText === 'object'){
    for(let i=0; i<sepText.length; i++){
      if (i===0){
        sepText1 = sepText[0].split('=');
      }else{
        sepText2 = sepText[1].split('=');
      }
    }
    sepText = sepText1.concat(sepText2);
  }
  
  for (let y in sepText){
    if (sepText[y].includes('%20')){
      sepText[y]=sepText[y].replaceAll('%20',' ');
    } 
  }
  
  let reqObj={};
  for (let i=0; i<sepText.length; i++){
    if(i%2===0){
      reqObj[sepText[i]]=sepText[i+1];
    }
  }
  return reqObj;

  
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);